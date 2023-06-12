export interface BasicProps {
  prop: string;
  // 标题
  title?: string;
  // placeholder
  placeholder?: string,
  // 禁用
  disabled?: boolean,
  // 必填
  required?: boolean,
  // 是否展示标题
  showTitle?: boolean,
  // 自定义样式
  style?: any,
  labelCol?: any;
  wrapperCol?: any;
  // 冒号
  colon?: boolean;
  // 规则
  rules?: any[];
  // 改变事件
  onChange?: (e: string | number | undefined) => void;
}

export const bProps = {
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
    default: true,
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