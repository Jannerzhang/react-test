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
    <GlobalStyle>
      <RootWrapperNaN>
      <Frame1000005538>
        <Frame1000005539>
          <SectionTitle>
            <TitleIndicator />
            <Typography.Title level="h3" style={{ fontSize: "16px" }}>
              基础信息
            </Typography.Title>
          </SectionTitle>

          <UserInfoSection>
            <Card bordered>
              <Descriptions column={3} layout="vertical">
                <Descriptions.DescriptionsItem label="姓名">
                  李*洋
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="昵称">
                  张益达
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="实名注册时间">
                  30-90天
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="证件号">
                  *************0023
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="证件类型">
                  身份证
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="年龄范围">
                  18-30岁
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="微信支付账户/QQ账户">
                  085e9858e4013c67a5115a89@wx.tenpay.com
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="绑定手机">
                  15656782568
                </Descriptions.DescriptionsItem>
              </Descriptions>
            </Card>

            <Card bordered style={{ marginTop: 20 }}>
              <Descriptions column={3} layout="vertical">
                <Descriptions.DescriptionsItem label="零钱余额">
                  2***.**
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="零钱通余额">
                  0.**
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="理财通余额">
                  0.**
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="可信地">
                  德宏傣族景颇族白治州
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="账户绑定记录">
                  <Button
                    variant="text"
                    theme="primary"
                    onClick={() => {
                      setBindDialogContent('账户绑定记录详细信息');
                      setBindDialogVisible(true);
                    }}
                  >
                    查看
                  </Button>
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="微信支付账户类型">
                  完整注册用户
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="微信常用设备">
                  170DFA981916E09C9E50DFE560B3C635
                </Descriptions.DescriptionsItem>
                <Descriptions.DescriptionsItem label="账户类型">
                  非III类账户
                </Descriptions.DescriptionsItem>
              </Descriptions>
            </Card>
          </UserInfoSection>

          <RecordsSection>
            <TabContainer>
              <Button
                variant={activeTab === "strategy" ? "outline" : "text"}
                onClick={() => setActiveTab("strategy")}
              >
                策略记录
              </Button>
              <Button
                variant={activeTab === "complaint" ? "outline" : "text"}
                onClick={() => setActiveTab("complaint")}
              >
                投诉记录
              </Button>
              <Button
                variant={activeTab === "transaction" ? "outline" : "text"}
                onClick={() => setActiveTab("transaction")}
              >
                交易信息
              </Button>
            </TabContainer>

            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              {[
                { title: "管控信息", data: controlData },
                { title: "管控信息历史记录", data: controlHistoryData },
                { title: "交易风险限制入账信息", data: transactionRiskData },
                {
                  title: "交易风险限制入账历史记录",
                  data: transactionRiskHistoryData,
                },
                {
                  title: "交易风险干预信息",
                  data: transactionInterventionData,
                },
                {
                  title: "交易风险干预解除记录",
                  data: transactionInterventionReleaseData,
                },
                { title: "交易风险S或Z干预信息", data: szInterventionData },
                {
                  title: "交易风险S或Z干预解除记录",
                  data: szInterventionReleaseData,
                },
                { title: "交易风险W干预信息", data: wInterventionData },
                {
                  title: "交易风险W干预解除记录",
                  data: wInterventionReleaseData,
                },
              ].map((section, index) => (
                <Card key={index} bordered>
                  <SectionTitle>
                    <TitleIndicator />
                    <Typography.Title level="h4">
                      {section.title}
                    </Typography.Title>
                  </SectionTitle>

                  <Table
                    data={section.data.map((item) => ({
                      ...item,
                      value: (
                        <ClickableCell
                          onClick={() => {
                            setModalContent(String(item.value));
                            setModalOpen(true);
                          }}
                        >
                          {item.value}
                        </ClickableCell>
                      ),
                    }))}
                    columns={columns}
                    rowKey="id"
                    size="medium"
                    bordered
                    stripe
                  />

                  <PaginationContainer>
                    <Typography.Text style={{ color: '#6b7280' }}>共3条</Typography.Text>
                    <Pagination
                      total={3}
                      pageSize={10}
                      current={1}
                      showPageSize={false}
                      showJumper={true}
                      size="small"
                    />
                  </PaginationContainer>
                </Card>
              ))}
            </Space>
          </RecordsSection>
        </Frame1000005539>
      </Frame1000005538>
        </RootWrapperNaN>
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
      </GlobalStyle>
    );
};

export default UserProfileCard;

// Styled components
const RootWrapperNaN = styled.div`
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
