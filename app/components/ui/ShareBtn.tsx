import React from "react";
import {
  EmailShareBtn,
  FBShareBtn,
  LinkedInShareBtn,
  PinterestShareBtn,
  TelegramShareBtn,
  TwitterShareBtn,
  WhatsAppShareBtn,
} from "dv-social-share";
import Modal from "./Modal";
import CopyTextBtn from "./CopyTextBtn";

interface ShareBtnProps {
  className: string;
  url: string;
}

const ShareBtn: React.FC<ShareBtnProps> = ({ className, url}) => {
  return (
    <Modal>
      <Modal.Open opens={"share"}>
        <button
          className={
            "transition-colors hover:text-green-900 hover:scale-95 rounded-md font-semibold " +
            className
          }
        >
          share
        </button>
      </Modal.Open>
      <Modal.Window name={"share"}>
        <div className="flex flex-wrap flex-col p-2 sm:p-4 gap-4 xs:min-w-[350px] xs:max-w-[390px] min-w-[78vw]">
          <CopyTextBtn text={url} />
          <div className="flex xs:gap-6 gap-2">
            <FBShareBtn url={url}  />
            <LinkedInShareBtn url={url}  />
            <TwitterShareBtn url={url}  />
            <TelegramShareBtn url={url}  />
            <WhatsAppShareBtn url={url}  />
            <EmailShareBtn url={url}  />
            <PinterestShareBtn url={url} media=""  />
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
};

export default ShareBtn;
