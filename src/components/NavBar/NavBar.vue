<script lang="tsx">
  import { type PropType, type ExtractPropTypes, defineComponent, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { NavBar, navBarProps as vanNavBarProps } from 'vant';
  import 'vant/es/nav-bar/style';

  export const navBarProps = {
    ...vanNavBarProps,
    placeholder: {
      ...vanNavBarProps.placeholder,
      default: true,
    },
    leftArrow: {
      ...vanNavBarProps.leftArrow,
      default: true,
    },
    clickLeft: {
      type: Function as PropType<() => void>,
    },
    clickRight: {
      type: Function as PropType<() => void>,
    },
  };

  export type NavBarProps = ExtractPropTypes<typeof navBarProps>;

  export default defineComponent({
    components: {
      NavBar,
    },

    props: navBarProps,

    emits: ['clickLeft', 'clickRight'],

    setup(props, { slots }) {
      const route = useRoute();
      const router = useRouter();

      const { leftArrow } = props;
      const getTitle = computed(() => route.meta.title);

      const vanNavBarSlots = {
        title: slots.title,
        left: slots.left,
        right: slots.right,
      };

      return () => (
        <div class="NavBar-root">
          <div class="nav-bar" style={{ zIndex: props.zIndex || 999 }}>
            <NavBar
              {...props}
              onClickLeft={props.clickLeft ? props.clickLeft : router.back}
              onClickRight={props.clickRight}
              leftText={leftArrow ? '返回' : undefined}
              title={props.title || getTitle.value}
              safe-area-inset-top
              fixed={false}
              v-slots={vanNavBarSlots}
              placeholder={false}
              zIndex={undefined}
            />
          </div>
          {props.placeholder && <div class="nav-bar-placeholder" />}
        </div>
      );
    },
  });
</script>

<style lang="scss" scoped>
  $height: 46px;

  .NavBar-root {
    .nav-bar {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      @include limit-width-root();

      :deep() {
        .van-nav-bar__content {
          height: $height;
        }
      }
    }

    .nav-bar-placeholder {
      height: $height;
    }
  }
</style>
