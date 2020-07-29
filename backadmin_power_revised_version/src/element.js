/**
 * Created by lidy on 2019/10/24.
 */
// 导入自己需要的组件
import {
  Button,
  Select,
  Option,
  Row,
  Col,
  Input,
  Avatar,
  Form,
  FormItem,
  Card,
  Loading,
  Dialog,
  Progress,
  DatePicker,
  Upload,
  Table,
  TableColumn,
  Switch,
  Pagination,
  RadioGroup,
  RadioButton,
  Tag,
  Popover,
  Image,
  Tooltip,
  Checkbox,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Cascader,
  MessageBox
} from "element-ui";

const element = {
  install: function(Vue) {
    Vue.use(Button);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Input);
    Vue.use(Avatar);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Card);
    Vue.use(Loading);
    Vue.use(Dialog);
    Vue.use(Progress);
    Vue.use(DatePicker);
    Vue.use(Upload);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Switch);
    Vue.use(Pagination);
    Vue.use(RadioGroup);
    Vue.use(RadioButton);
    Vue.use(Upload);
    Vue.use(Tag);
    Vue.use(Popover);
    Vue.use(Image);
    Vue.use(Switch);
    Vue.use(Tooltip);
    Vue.use(Checkbox);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Cascader);
    Vue.use(MessageBox);
  }
};
export default element;
