import paths from "../../routing/Paths";
import Modal from "react-modal";
import styles from "./Menu.module.css";

interface MenuProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const Menu = ({ modalIsOpen, closeModal }: MenuProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.customModal}
    >
      <div className="flex flex-col">
        <img
          src="/new-account-form/close-round.png"
          alt="close"
          className="w-[25px] ml-auto cursor-pointer"
          onClick={closeModal}
        />
        <nav className="flex flex-col justify-between w-[53%]">
          <a
            href={paths.ABOUT}
            target="_blank"
            className="text-green  hover:text-[#744BFC]"
          >
            Hakkımızda
          </a>
          <a
            href={paths.JURI}
            target="_blank"
            className="text-green  hover:text-[#744BFC] mt-2"
          >
            Juri - Yarışma Yazılımı
          </a>
          <a
            href={paths.NINJA}
            target="_blank"
            className="text-green  hover:text-[#744BFC] mt-2"
          >
            Word Ninja
          </a>
          <a
            href={paths.PYRAMIDS}
            target="_blank"
            className="text-green  hover:text-[#744BFC] mt-2"
          >
            Word Pyramids
          </a>
        </nav>
        <div className="flex justify-between w-1/4 mt-4">
          <a href={paths.YOUTUBE} target="_blank">
            <img
              src="/header/youtube.png"
              alt="youtube"
              className="w-[36px] "
            />
          </a>
          <a href={paths.INSTAGRAM} target="_blank">
            <img
              src="/header/instagram.png"
              alt="instagram"
              className="w-[36px] "
            />
          </a>
          <a href={paths.BEHANCE} target="_blank">
            <img
              src="/header/behance.png"
              alt="behance"
              className="w-[36px] "
            />
          </a>
          <a href={paths.LINKEDIN} target="_blank">
            <img
              src="/header/linkedin.png"
              alt="linkedin"
              className="w-[36px] "
            />
          </a>
        </div>
      </div>
    </Modal>
  );
};
export default Menu;
