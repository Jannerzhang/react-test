import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Card,
  Descriptions,
  Table,
  Pagination,
  Button,
  Space,
  Typography,
  Dialog,
} from "tdesign-react";
import "tdesign-react/es/style/index.css";

const UserProfileCard = () => {
  const [activeTab, setActiveTab] = useState("strategy");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [bindDialogVisible, setBindDialogVisible] = useState(false);
  const [bindDialogContent, setBindDialogContent] = useState<string | null>(null);

  return (
    <>
    <div>1212121</div>
    <div>1212121</div>
    <div>1212121</div>
    <div>1212121</div>
    <div>1212121</div>
    <div>1212121</div>
    <div>1212121</div>
    <div>1212121</div>
    <div>1212121</div>
        <Dialog
          visible={modalOpen}
          onClose={() => setModalOpen(false)}
          header="详情"
          closeBtn={<span>×</span>}
        >
          <div>{modalContent}</div>
          <div style={{ marginTop: 12, textAlign: 'right' }}>
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              关闭
            </Button>
          </div>
        </Dialog>
        <Dialog
          visible={bindDialogVisible}
          onClose={() => setBindDialogVisible(false)}
          header="账户绑定记录"
          closeBtn={<span>×</span>}
        >
          <div>{bindDialogContent}</div>
          <div style={{ marginTop: 12, textAlign: 'right' }}>
            <Button variant="outline" onClick={() => setBindDialogVisible(false)}>
              关闭
            </Button>
          </div>
        </Dialog>
    </>);
};

export default UserProfileCard;

// Styled components
const RootWrapper: React.FC<React.PropsWithChildren<{}>> = styled.div`
  position: relative;
`;

const Frame1000005538 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1684px;
  height: 2364px;
`;

const Frame1000005539 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 20px;
  box-sizing: border-box;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const TitleIndicator = styled.div`
  width: 4px;
  height: 20px;
  background-color: rgb(38, 92, 240);
`;

const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const RecordsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(247, 247, 250);
  box-sizing: border-box;
  padding: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

{/* @ts-ignore */}
const GlobalStyle = styled.div`
  table td {
    color: red;
  }
`;

const ClickableCell = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

// removed custom modal overlay/box in favor of tdesign Dialog

// Table data and columns
const columns = [
  { colKey: "label", title: "项目", width: 200 },
  { colKey: "value", title: "内容", width: 400 },
];

const controlData = [
  { id: 1, label: "策略名称", value: "社交支付欺诈管控冻结\n->可疑收款账户" },
  { id: 2, label: "限制措施", value: "不收不付不可提现" },
  { id: 3, label: "限制开始时间", value: "2022-05-12 13:38:44" },
  { id: 4, label: "限制到期时间", value: "2022-05-12 13:38:44" },
];

const controlHistoryData = [
  { id: 1, label: "策略名称", value: "涉嫌欺诈" },
  { id: 2, label: "限制措施", value: "不收不付" },
  { id: 3, label: "限制开始时间", value: "2022-05-12 13:38:44" },
  { id: 4, label: "限制到期时间", value: "2022-05-12 13:38:44" },
];

const transactionRiskData = [
  { id: 1, label: "策略名称", value: "社交支付欺诈管控限收\n->可疑收款账户" },
  { id: 2, label: "限制开始时间", value: "2022-05-12 13:38:44" },
  { id: 3, label: "限制到期时间", value: "2022-05-12 13:38:44" },
];

const transactionRiskHistoryData = [
  { id: 1, label: "策略名称", value: "社交支付欺诈管控限收\n->可疑收款账户" },
  { id: 2, label: "限制开始时间", value: "2022-05-12 13:38:44" },
  { id: 3, label: "限制到期时间", value: "2022-05-12 13:38:44" },
];

const transactionInterventionData = [
  { id: 1, label: "策略名称", value: "社交支付欺诈单笔限付\n->可疑交易" },
  { id: 2, label: "账户属性", value: "收款方" },
  { id: 3, label: "干预时间", value: "2022-05-12 13:38:44" },
];

const transactionInterventionReleaseData = [
  { id: 1, label: "解除类型", value: "社交支付欺诈单笔限付\n->可疑交易" },
  { id: 2, label: "解除时间", value: "2022-05-12 13:38:44" },
];

const szInterventionData = [
  { id: 1, label: "策略名称", value: "社交支付欺诈单笔限付\n->可疑交易" },
  { id: 2, label: "账户属性", value: "收款方" },
  { id: 3, label: "干预时间", value: "2022-05-12 13:38:44" },
];

const szInterventionReleaseData = [
  { id: 1, label: "解除类型", value: "社交支付欺诈单笔限付\n->可疑交易" },
  { id: 2, label: "解除时间", value: "2022-05-12 13:38:44" },
];

const wInterventionData = [
  { id: 1, label: "策略名称", value: "社交支付欺诈单笔限付\n->可疑交易" },
  { id: 2, label: "账户属性", value: "收款方" },
  { id: 3, label: "干预时间", value: "2022-05-12 13:38:44" },
];

const wInterventionReleaseData = [
  { id: 1, label: "解除类型", value: "社交支付欺诈单笔限付\n->可疑交易" },
  { id: 2, label: "解除时间", value: "2022-05-12 13:38:44" },
];
