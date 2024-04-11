<script lang="tsx">
  import { type ExtractPropTypes, defineComponent, computed, unref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { NavBar, navBarProps as vanNavBarProps } from 'vant';
  import 'vant/es/nav-bar/style';

  export const navBarProps = {
    leftArrow: {
      ...vanNavBarProps.leftArrow,
      default: true,
    },
  } as unknown as typeof vanNavBarProps;

  export type NavBarProps = ExtractPropTypes<typeof navBarProps>;

  export default defineComponent({
    components: {
      NavBar,
    },

    inheritAttrs: false,

    props: navBarProps,

    setup(props, { slots, attrs }) {
      const route = useRoute();
      const router = useRouter();

      const getTitle = computed(() => route.meta.title);

      const navBarSlots = {
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
          title={unref(getTitle)}
          fixed
          leftArrow
          placeholder
          safe-area-inset-top
          zIndex={999}
          onClickLeft={(attrs['onClickLeft'] as undefined) || router.back}
          v-slots={navBarSlots}
          {...attrs}
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
