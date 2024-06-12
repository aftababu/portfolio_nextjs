import Arrow from "@/public/assets/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

interface InfoBoxProps {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link className="neo-brutalism-white neo-btn" href={link}>
        {btnText}
        <Image width={16} height={16} className="w-4 h-4 object-contain" src={Arrow} alt="arrow" />
      </Link>
    </div>
  );
};

const renderContent: { [key: number]: JSX.Element } = {
  1: (
    <p className="text-center absolute top-[30vh] left-1/3 z-20 text-[18px] lg:text-2xl text-white  bg-green-500 px-5 py-3 rounded-md">
      Assalamualaikum , I am <span className="font-semibold">Wasih</span> 👋
      <br />A junior web developer from Bangladesh
    </p>
  ),
  2: (
    <InfoBox
      text={"Worked with many companies and learned many things"}
      link={"/projects"}
      btnText={"Visit my PortFolio"}
    />
  ),
  3: (
    <InfoBox
      text={"Led multiple projects to success over the years"}
      link={"/"}
      btnText={"Learn More"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev ? I'm just a keystroke away"
      }
      link={"/contact"}
      btnText={"Contact me"}
    />
  ),
};

interface HomeInfoProps {
  currentState: number;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ currentState }) => {
  return renderContent[currentState] || null;
};

export default HomeInfo;
