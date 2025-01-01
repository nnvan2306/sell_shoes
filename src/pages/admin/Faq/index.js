import styles from "./style.module.scss";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { BiSearch, BiTrash } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Select from "react-select";
import { CustomeButton, Modal } from "~/components";
import { getFaqs } from "./api/get-faq";
import { BsEye } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import ModelFaq from "./ModelFaq";

//  const typeModelFaq = "EDIT" | "CREATE" | "VIEW";
const cx = classNames.bind(styles);

const FaqPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [isOpenModal, setIsOpenModel] = useState(false);
    const [faqSelected, setFaqSelected] = useState(null);
    const [typeModal, setTypeModal] = useState("");

    const handleOpenModel = (type, faq) => {
        setIsOpenModel(true);
        setTypeModal(type);
        setFaqSelected(faq);
    };

    const handleCloseModel = (type, newFaq) => {
        let newFaqs;
        switch (type) {
            case "EDIT":
                newFaqs = faqs.map((item) => {
                    if (item.id === newFaq.id) {
                        return newFaq;
                    } else {
                        return item;
                    }
                });
                break;
            case "CREATE":
                newFaqs = [...faqs, newFaq];
                break;
            case "DELETE":
                newFaqs = faqs.filter((item) => item.id !== newFaq.id);
                break;
            default:
                break;
        }
        setFaqs(newFaqs);
        setIsOpenModel(false);
    };
    useEffect(() => {
        const fetch = async () => {
            const res = await getFaqs();
            console.log(("res ", res));
            if (res.status === 200) {
                setFaqs(res?.data?.data || []);
            }
        };
        fetch();
    }, []);
    return (
        <div className={cx("wrapper")} style={{ fontSize: "14px" }}>
            <div className={cx("container")}>
                <div>
                    <h1>FAQ và câu hỏi thường gặp</h1>
                </div>
                <div className={cx("content")}>
                    <div className={cx("header-content")}>
                        <div style={{ display: "flex" }}></div>
                        <div onClick={() => handleOpenModel("CREATE", null)}>
                            <CustomeButton
                                className={cx("cus-button")}
                                title={"Thêm FQA"}
                                icon={<MdAdd fontSize={20} />}
                                isLeft={true}
                                bgHover={"#2f5acf"}
                                textColorHover={"white"}
                                containStyles={{
                                    width: "150px",
                                    backgroundColor: "black",
                                    color: "white",
                                    borderRadius: "8px",
                                    padding: "10px 10px",
                                    marginTop: "6px",
                                    marginRight: "12px",
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            padding: "10px 32px 40px",
                            width: "100%",
                            minHeight: "550px",
                        }}
                    >
                        <table
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                borderColor: "transparent",
                                border: "none",
                                position: "relative",
                            }}
                        >
                            <thead
                                className={cx("thead")}
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    borderColor: "transparent",
                                    border: "none",
                                }}
                            >
                                <tr
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#e6f1fe",
                                        color: "black",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <th
                                        className={cx("col-tbl")}
                                        style={{ paddingLeft: "20px" }}
                                    >
                                        Question
                                    </th>
                                    <th className={cx("col-tbl")}>Answer</th>
                                    <th className={cx("col-tbl col-action")}>
                                        Tác vụ
                                    </th>
                                </tr>
                            </thead>
                            <tbody className={cx("tbody")}>
                                {faqs.length > 0
                                    ? faqs.map((item, index) => {
                                          return (
                                              <tr
                                                  key={index}
                                                  className={cx("row-item")}
                                              >
                                                  <td
                                                      style={{
                                                          paddingLeft: "34px",
                                                          width: "30%",
                                                      }}
                                                  >
                                                      {item?.question}
                                                  </td>
                                                  <td style={{ width: "50%" }}>
                                                      {item?.answer}
                                                  </td>

                                                  <td>
                                                      <div
                                                          style={{
                                                              display: "flex",
                                                          }}
                                                      >
                                                          <button
                                                              style={{
                                                                  marginRight:
                                                                      "4px",
                                                              }}
                                                              onClick={() =>
                                                                  handleOpenModel(
                                                                      "EDIT",
                                                                      item
                                                                  )
                                                              }
                                                          >
                                                              <AiOutlineEdit
                                                                  fontSize={20}
                                                                  color="blue"
                                                              />
                                                          </button>
                                                          <button
                                                              style={{
                                                                  marginRight:
                                                                      "4px",
                                                              }}
                                                              onClick={() =>
                                                                  handleOpenModel(
                                                                      "VIEW",
                                                                      item
                                                                  )
                                                              }
                                                          >
                                                              <BsEye
                                                                  fontSize={20}
                                                                  color="blue"
                                                              />
                                                          </button>
                                                          <button
                                                              onClick={() =>
                                                                  handleOpenModel(
                                                                      "DELETE",
                                                                      item
                                                                  )
                                                              }
                                                          >
                                                              <BiTrash
                                                                  fontSize={20}
                                                                  color="red"
                                                              />
                                                          </button>
                                                      </div>
                                                  </td>
                                              </tr>
                                          );
                                      })
                                    : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <footer className={cx("sticky-footer")} style={{ zIndex: 10 }}>
                <div className={cx("container")}>
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2023</span>
                    </div>
                </div>
            </footer>
            <Modal visible={isOpenModal} setModal={setIsOpenModel}>
                <ModelFaq
                    typeModelFaq={typeModal}
                    onClose={handleCloseModel}
                    data={faqSelected}
                />
            </Modal>
        </div>
    );
};

export default FaqPage;
