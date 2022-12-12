import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Mail.css";
import {
  AccessTime,
  Archive,
  ArrowBack,
  BookmarkAddOutlined,
  ChevronLeft,
  ChevronRight,
  DeleteOutlineOutlined,
  DriveFileMoveOutlined,
  Keyboard,
  KeyboardArrowDown,
  LabelImportant,
  LabelOutlined,
  MailOutline,
  MoreVertOutlined,
  ReportGmailerrorred,
} from "@mui/icons-material";

function Mail() {
  const history = useNavigate();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <Archive />
          </IconButton>
          <IconButton>
            <ReportGmailerrorred />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlined />
          </IconButton>
          <IconButton>
            <MailOutline />
          </IconButton>
          <IconButton>
            <AccessTime />
          </IconButton>
          <IconButton>
            <BookmarkAddOutlined />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlined />
          </IconButton>
          <IconButton>
            <LabelOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <Keyboard />
          </IconButton>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportant className="mail__important" />
          <p>title</p>
          <p className="mail__time">10pm</p>
        </div>

        <div className="mail__message">
          <p>THis is test case </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
