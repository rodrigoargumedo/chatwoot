/* eslint no-plusplus: 0 */
import AvatarUploader from './widgets/forms/AvatarUploader.vue';
import Bar from './widgets/chart/BarChart';
import Button from './ui/WootButton.vue';
import Code from './Code.vue';
import ColorPicker from './widgets/ColorPicker.vue';
import ConfirmDeleteModal from './widgets/modal/ConfirmDeleteModal.vue';
import ConfirmModal from './widgets/modal/ConfirmationModal.vue';
import ContextMenu from './ui/ContextMenu.vue';
import DeleteModal from './widgets/modal/DeleteModal.vue';
import DropdownItem from 'shared/components/ui/dropdown/DropdownItem.vue';
import DropdownMenu from 'shared/components/ui/dropdown/DropdownMenu.vue';
import FeatureToggle from './widgets/FeatureToggle.vue';
import HorizontalBar from './widgets/chart/HorizontalBarChart';
import Input from './widgets/forms/Input.vue';
import PhoneInput from './widgets/forms/PhoneInput.vue';
import Label from './ui/Label.vue';
import LoadingState from './widgets/LoadingState.vue';
import Modal from './Modal.vue';
import ModalHeader from './ModalHeader.vue';
import ReportStatsCard from './widgets/ReportStatsCard.vue';
import SidemenuIcon from './SidemenuIcon.vue';
import Spinner from 'shared/components/Spinner.vue';
import SubmitButton from './buttons/FormSubmitButton.vue';
import Tabs from './ui/Tabs/Tabs.jsx';
import TabsItem from './ui/Tabs/TabsItem.vue';
import Thumbnail from './widgets/Thumbnail.vue';

const WootUIKit = {
  AvatarUploader,
  Bar,
  Button,
  Code,
  ColorPicker,
  ConfirmDeleteModal,
  ConfirmModal,
  ContextMenu,
  DeleteModal,
  DropdownItem,
  DropdownMenu,
  FeatureToggle,
  HorizontalBar,
  Input,
  PhoneInput,
  Label,
  LoadingState,
  Modal,
  ModalHeader,
  ReportStatsCard,
  SidemenuIcon,
  Spinner,
  SubmitButton,
  Tabs,
  TabsItem,
  Thumbnail,
  install(Vue) {
    const keys = Object.keys(this);
    keys.pop(); // remove 'install' from keys
    let i = keys.length;
    while (i--) {
      Vue.component(`woot${keys[i]}`, this[keys[i]]);
    }
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WootUIKit);
}

export default WootUIKit;
