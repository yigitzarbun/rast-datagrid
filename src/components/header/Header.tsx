import paths from "../../routing/Paths";
import { Colors } from "../../common/Colors";

function Header() {
  return (
    <div className="flex justify-between mt-[43px] mb-[40px] mr-[111px] ml-[104px] mx-auto items-center">
      <img src="/logo/logo.png" alt="logo" className="w-[124px] h-[36.7px]" />
      <nav className="flex justify-between w-[53%]">
        <a
          href={paths.ABOUT}
          target="_blank"
          className="text-green text-sm hover:text-[#744BFC]"
        >
          Hakkımızda
        </a>
        <a
          href={paths.JURI}
          target="_blank"
          className="text-green text-sm hover:text-[#744BFC]"
        >
          Juri - Yarışma Yazılımı
        </a>
        <a
          href={paths.NINJA}
          target="_blank"
          className="text-green text-sm hover:text-[#744BFC]"
        >
          Word Ninja
        </a>
        <a
          href={paths.PYRAMIDS}
          target="_blank"
          className="text-green text-sm hover:text-[#744BFC]"
        >
          Word Pyramids
        </a>
      </nav>
      <div className="flex justify-between w-[114px]">
        <a href={paths.YOUTUBE} target="_blank">
          <img
            src="/accounts/youtube.png"
            alt="youtube"
            className="w-[18px] h-[18px]"
          />
        </a>
        <a href={paths.INSTAGRAM} target="_blank">
          <img
            src="/accounts/instagram.png"
            alt="instagram"
            className="w-[18px] h-[18px]"
          />
        </a>
        <a href={paths.BEHANCE} target="_blank">
          <img
            src="/accounts/behance.png"
            alt="behance"
            className="w-[18px] h-[18px]"
          />
        </a>
        <a href={paths.LINKEDIN} target="_blank">
          <img
            src="/accounts/linkedin.png"
            alt="linkedin"
            className="w-[18px] h-[18px]"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
