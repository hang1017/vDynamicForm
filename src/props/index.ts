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

export interface OptionsItemProps {
  [key: string]: Record<string, string>
}

export interface AliasProps {
  label?: string;
  value?: string;
}