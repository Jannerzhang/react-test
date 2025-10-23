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
    Steps
} from "tdesign-react";
import "tdesign-react/es/style/index.css";
const {StepItem} = Steps;

export const UserProfileCard2 = () => {
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
            <Steps
                defaultCurrent={1}
                layout="horizontal"
                separator="line"
                sequence="positive"
                theme="default"
            >
                <StepItem
                    content="提示文字"
                    title="步骤1"
                />
                <StepItem
                    content="提示文字"
                    title="步骤2"
                />
                <StepItem
                    content="提示文字"
                    title="步骤3"
                />
            </Steps>

        </>);
};

