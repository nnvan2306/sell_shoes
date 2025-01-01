import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./ModelFaq.module.scss";
import classNames from "classnames/bind";
import { CustomeButton } from "~/components";
import { MdAdd } from "react-icons/md";
import { updateFaq } from "../api/update-faq";
import { createFaq } from "../api/create-faq";

import { ToastContainer, toast } from "react-toastify";
import { deleteFaq } from "../api/delete-faq";
const cx = classNames.bind(styles);

const ModelFaq = ({ typeModelFaq, onClose, data }) => {
    const [faq, setFaq] = useState(data);

    const notify = useCallback(
        (type, message) => toast(message, { type: type }),
        []
    );

    const handleValidate = () => {
        if (!faq?.answer || !faq?.question) {
            return false;
        }

        return true;
    };

    console.log(faq);
    const handleUpdateFaq = async () => {
        const isValid = handleValidate();
        if (!isValid) {
            return;
        }
        console.log(faq);
        const res = await updateFaq({
            id: faq.id,
            question: faq.question,
            answer: faq.answer,
        });

        if (res.status === 200) {
            onClose("EDIT", res.data.data);
            notify("success", "Sửa FAQ tthành công");
        } else {
            console.log(res);
            notify("error", "Có lỗi xảy ra vui lòng thử lại sausau");
        }
    };

    const handleCreateFaq = async () => {
        const isValid = handleValidate();
        if (!isValid) {
            return;
        }
        const res = await createFaq({
            answer: faq.answer,
            question: faq.question,
        });

        if (res.status === 200) {
            onClose("CREATE", res.data.data);
            notify("success", "Tạo FAQ tthành công");
        } else {
            console.log(res);
            notify("error", "Có lỗi xảy ra vui lòng thử lại sausau");
        }
    };

    const handleDeleteFaq = async () => {
        const res = await deleteFaq(faq?.id);

        if (res.status === 200) {
            onClose("DELETE", faq);
            notify("success", "Xóa FAQ tthành công");
        } else {
            console.log(res);
            notify("error", "Có lỗi xảy ra vui lòng thử lại sausau");
        }
    };

    const infoModal = useMemo(() => {
        switch (typeModelFaq) {
            case "EDIT":
                return {
                    title: "Edit FAQ",
                    action: handleUpdateFaq,
                };
            case "CREATE":
                return {
                    title: "Create FAQ",
                    action: handleCreateFaq,
                };

            case "DELETE":
                return {
                    title: "Confim Delete FAq",
                    action: handleDeleteFaq,
                };
            default:
                return {
                    title: "View FAQ",
                    action: handleUpdateFaq,
                };
        }
    }, [typeModelFaq, faq]);

    return (
        <div
            className={cx("wrapper")}
            style={{ animation: "dropTop .3s linear" }}
        >
            <ToastContainer />

            <div
                style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    marginBottom: "20px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "20px",
                    width: "20%",
                    borderRadius: "4px",
                }}
            >
                {infoModal.title}
            </div>

            <div style={{ padding: "20px", width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        paddingBottom: "20px",
                    }}
                >
                    <div className={cx("form-common")}>
                        <label>Quesion</label>
                        <br />
                        <textarea
                            type="text"
                            style={{
                                marginTop: "12px",
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "8px",
                                width: "100%",
                            }}
                            value={faq?.question || ""}
                            onChange={(e) => {
                                setFaq((prev) => ({
                                    ...prev,
                                    question: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div className={cx("form-common")}>
                        <label>Answer</label>
                        <br />
                        <textarea
                            type="text"
                            style={{
                                marginTop: "12px",
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "8px",
                                width: "100%",
                            }}
                            value={faq?.answer || ""}
                            onChange={(e) => {
                                setFaq((prev) => ({
                                    ...prev,
                                    answer: e.target.value,
                                }));
                            }}
                        />
                    </div>
                </div>

                {typeModelFaq !== "VIEW" && (
                    <div style={{ display: "flex", justifyContent: "right" }}>
                        <CustomeButton
                            onClick={infoModal.action}
                            type={"Submit"}
                            className={cx("cus-button")}
                            title={"Xác nhận"}
                            icon={<MdAdd fontSize={20} />}
                            isLeft={true}
                            bgHover={"#2f5acf"}
                            textColorHover={"white"}
                            containStyles={{
                                width: "120px",
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "8px",
                                padding: "10px 10px",
                                marginTop: "16px",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModelFaq;
