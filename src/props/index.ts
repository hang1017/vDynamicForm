export const basicProps = {
  // 标题
  title: String,
  // placeholder
  placeholder: String,
  // 禁用
  disabled: Boolean,
  // 必填
  required: Boolean,
  // 是否展示标题
  showTitle: {
    type: Boolean,
    required: false,
    default: false,
  },
  // 自定义样式
  styles: {
    type: Object,
    required: false,
  },
  labelCol: {
    type: Object,
    required: false,
  },
  wrapperCol: {
    type: Object,
    required: false,
  },
  // 冒号
  colon: {
    type: Boolean,
    required: false,
    default: true,
  },
  // key
  prop: {
    type: String,
    required: true,
  },
  // 规则
  rules: {
    type: Array,
    required: false,
  },
  // 改变事件
  onChange: {
    type: Function,
    required: false,
  },
  // 自定义标题
  labelSlot: {
    type: Boolean,
    default: false,
    required: false,
  }
}