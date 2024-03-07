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
    zIndex: {
      ...vanNavBarProps.zIndex,
      default: 999,
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

    emits: NavBar.emits,

    setup(props, { slots }) {
      const route = useRoute();
      const router = useRouter();

      const { clickLeft, clickRight, ...rest } = props;
      const getTitle = computed(() => route.meta.title);

      const vanNavBarSlots = {
        title: slots.title,
        left: () =>
          slots.left
            ? slots.left()
            : props.leftArrow && <i class="i-ic:sharp-arrow-back-ios text-xl" />,
        right: slots.right,
      };

      return () => (
        <NavBar
          class="nav-bar"
          {...rest}
          onClickLeft={clickLeft ? clickLeft : router.back}
          onClickRight={clickRight}
          title={rest.title || getTitle.value}
          safe-area-inset-top
          fixed
          v-slots={vanNavBarSlots}
        />
      );
    },
  });
</script>

<style lang="scss" scoped>
  .nav-bar {
    :deep() {
      .van-nav-bar {
        height: 46px;
        @include limit-width();
      }
    }
  }
</style>
