import { useState } from "react";
import svgPaths from "./imports/svg-jss7m11ntp";
import clsx from "clsx";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// --- Facility Data ---
const facilities = [
  {
    id: 1,
    name: "수원월드컵공원 테니스장",
    city: "수원시",
    hours: "06:00~21:00",
    phone: "031-228-4582",
    holiday: "매주 월요일",
    address: "경기도 수원시 팔달구 월드컵로 310",
    tags: ["하드코트 8면", "예약가능"],
  },
  {
    id: 2,
    name: "탄천종합운동장 테니스장",
    city: "성남시",
    hours: "05:00~22:00",
    phone: "031-729-3648",
    holiday: "연중무휴",
    address: "경기도 성남시 분당구 야탑로 215",
    tags: ["클레이코트 12면", "예약가능"],
  },
  {
    id: 3,
    name: "고양종합운동장 테니스장",
    city: "고양시",
    hours: "06:00~20:00",
    phone: "031-8075-4200",
    holiday: "매주 화요일",
    address: "경기도 고양시 덕양구 동산로 140",
    tags: ["하드코트 6면", "예약가능"],
  },
  {
    id: 4,
    name: "용인시민체육공원 테니스장",
    city: "용인시",
    hours: "07:00~19:00",
    phone: "031-324-2661",
    holiday: "매주 수요일",
    address: "경기도 용인시 처인구 금학로 246",
    tags: ["인조잔디코트 10면", "예약가능"],
  },
  {
    id: 5,
    name: "부천종합운동장 테니스장",
    city: "부천시",
    hours: "06:00~21:00",
    phone: "032-625-7979",
    holiday: "연중무휴",
    address: "경기도 부천시 원미구 길주로 1",
    tags: ["하드코트 8면", "예약가능"],
  },
  {
    id: 6,
    name: "안산와동 테니스장",
    city: "안산시",
    hours: "06:00~22:00",
    phone: "031-481-3995",
    holiday: "매주 월요일",
    address: "경기도 안산시 단원구 선부광장남로 24",
    tags: ["클레이코트 6면", "예약가능"],
  },
  {
    id: 7,
    name: "평촌중앙공원 테니스장",
    city: "안양시",
    hours: "05:00~21:00",
    phone: "031-8045-5800",
    holiday: "연중무휴",
    address: "경기도 안양시 동안구 시민대로 230",
    tags: ["하드코트 8면", "예약가능"],
  },
  {
    id: 8,
    name: "남양주체육문화센터 테니스장",
    city: "남양주시",
    hours: "06:00~20:00",
    phone: "031-590-8567",
    holiday: "매주 목요일",
    address: "경기도 남양주시 화도읍 경춘로 2110",
    tags: ["하드코트 4면", "예약가능"],
  },
];

const regions = [
  "전체",
  "수원시",
  "성남시",
  "고양시",
  "용인시",
  "부천시",
  "안산시",
  "안양시",
  "남양주시",
  "화성시",
  "평택시",
  "의정부시",
  "시흥시",
];

// --- Reusable Components ---
function Button5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[59.987px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center px-0 py-[8px] relative size-full">
        {children}
      </div>
    </div>
  );
}

function Container68({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[99.988px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        {children}
      </div>
    </div>
  );
}

function Container67({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-gray-200 relative rounded-[10px] shrink-0 size-[80px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        {children}
      </div>
    </div>
  );
}

type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}

type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <Wrapper3
      additionalClassNames={clsx(
        "basis-0 grow min-h-px min-w-px relative shrink-0",
        additionalClassNames,
      )}
    >
      {children}
    </Wrapper3>
  );
}

type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <Wrapper3
      additionalClassNames={clsx(
        "h-[40px] relative rounded-[2.68435e+07px] shrink-0",
        additionalClassNames,
      )}
    >
      {children}
    </Wrapper3>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        {children}
      </svg>
    </div>
  );
}

function Icon8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Container66({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[99.988px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start relative size-full">
          {children}
        </div>
      </div>
    </div>
  );
}

type TextText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText3({
  text,
  additionalClassNames = "",
}: TextText3Props) {
  return (
    <div
      className={clsx(
        "h-[15.988px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">
          {text}
        </p>
      </div>
    </div>
  );
}

type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="content-stretch flex h-[15.988px] items-start overflow-clip relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px]">
        {text}
      </p>
    </div>
  );
}

type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <div className="content-stretch flex h-[18.4px] items-start w-[28px]">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        {text}
      </p>
    </div>
  );
}

type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({
  text,
  additionalClassNames = "",
}: TextText1Props) {
  return (
    <div
      className={clsx(
        "bg-gray-100 content-stretch flex h-[19.988px] items-start px-[8px] py-[2px] rounded-[4px]",
        additionalClassNames,
      )}
    >
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">
        {text}
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_1_430)" id="Icon">
        <path
          d={svgPaths.pc012c00}
          id="Vector"
          stroke="var(--stroke-0, #6A7282)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.16667"
        />
        <path
          d="M7 3.5V7L9.33333 8.16667"
          id="Vector_2"
          stroke="var(--stroke-0, #6A7282)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.16667"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_430">
          <rect fill="white" height="14" width="14" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}

type Text10Props = {
  text: string;
  additionalClassNames?: string;
};

function Text10({
  text,
  additionalClassNames = "",
}: Text10Props) {
  return (
    <div
      className={clsx(
        "bg-clip-padding border-0 border-[transparent] border-solid relative size-full",
        additionalClassNames,
      )}
    >
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">
        {text}
      </p>
    </div>
  );
}

type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({
  text,
  additionalClassNames = "",
}: TextTextProps) {
  return (
    <div
      className={clsx(
        "h-[20px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <Text10
        text={text}
        additionalClassNames="overflow-clip rounded-[inherit]"
      />
    </div>
  );
}

function Icon() {
  return (
    <Wrapper>
      <g id="Icon">
        <path
          d={svgPaths.p1539e500}
          id="Vector"
          stroke="var(--stroke-0, #6A7282)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.16667"
        />
        <path
          d={svgPaths.p37b99980}
          id="Vector_2"
          stroke="var(--stroke-0, #6A7282)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.16667"
        />
      </g>
    </Wrapper>
  );
}

type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">
        {text}
      </p>
    </div>
  );
}

type ButtonTextProps = {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

function ButtonText({
  text,
  isActive,
  onClick,
}: ButtonTextProps) {
  return (
    <Wrapper1
      additionalClassNames={clsx(
        isActive ? "bg-[#ff6900]" : "bg-gray-100",
        "w-[80px] cursor-pointer hover:bg-[#ff7910] transition-colors",
      )}
    >
      <button
        onClick={onClick}
        className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[40.5px] not-italic text-[16px] text-center text-nowrap top-[5.8px] translate-x-[-50%] whitespace-pre w-full"
        style={{ color: isActive ? "white" : "#364153" }}
      >
        {text}
      </button>
    </Wrapper1>
  );
}

// --- Tennis Court Card Component ---
type TennisCourtCardProps = {
  facility: (typeof facilities)[0];
};

function TennisCourtCard({ facility }: TennisCourtCardProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pb-[0.8px] pt-[16px] px-[16px] w-full border-b border-gray-200">
      <Container66>
        <Container67>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1620742820748-87c09249a72a?w=160&h=160&fit=crop"
            alt={facility.name}
            className="h-[80px] w-full object-cover rounded-[10px]"
          />
        </Container67>
        <Container68>
          <HeadingText text={facility.name} />
          <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full">
            <Icon />
            <TextText
              text={facility.city}
              additionalClassNames="w-[56px]"
            />
          </div>
          <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full">
            <Icon1 />
            <div className="h-[20px] relative shrink-0 w-[77.625px]">
              <Text10 text={facility.hours} />
            </div>
          </div>
          <div className="h-[19.988px] relative shrink-0 w-full flex gap-[4px]">
            {facility.tags.map((tag, idx) => (
              <TextText1
                key={idx}
                text={tag}
                additionalClassNames=""
              />
            ))}
          </div>
        </Container68>
      </Container66>
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full border-t border-gray-100">
        <div className="h-[20px] relative shrink-0 w-full flex items-center gap-[16px]">
          <div className="flex items-center gap-[4px]">
            <TextText2 text="전화" />
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#6a7282] text-[14px]">
              {facility.phone}
            </p>
          </div>
          <div className="flex items-center gap-[4px]">
            <TextText2 text="휴무" />
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#6a7282] text-[14px]">
              {facility.holiday}
            </p>
          </div>
        </div>
        <ParagraphText text={facility.address} />
      </div>
    </div>
  );
}

// --- Region Selector Component ---
type RegionSelectorProps = {
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
};

function RegionSelector({
  selectedRegion,
  onSelectRegion,
}: RegionSelectorProps) {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-start overflow-x-auto relative shrink-0 w-full hide-scrollbar">
      {regions.map((region) => (
        <ButtonText
          key={region}
          text={region}
          isActive={selectedRegion === region}
          onClick={() => onSelectRegion(region)}
        />
      ))}
    </div>
  );
}

// --- Header Component ---
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("수원");
  const cities = [
    "수원",
    "성남",
    "고양",
    "용인",
    "부천",
    "안산",
    "안양",
    "남양주",
  ];

  return (
    <div className="bg-white content-stretch flex flex-col h-[65px] items-start pb-[0.8px] pt-[12px] px-[16px] w-full border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-[8px] px-[12px] py-[8px] bg-white border border-gray-300 rounded-lg hover:border-[#ff6900] hover:bg-gray-50 transition-all shadow-sm"
          >
            <span className="font-['Arial:Regular',sans-serif] text-[16px] text-[#101828]">
              {selectedCity}
            </span>
            <svg
              className={`w-[16px] h-[16px] transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d={svgPaths.p7b68400}
                stroke="#4A5565"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-[calc(100%+4px)] left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[120px] z-20">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    "w-full text-left px-[16px] py-[10px] hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg",
                    selectedCity === city
                      ? "bg-orange-50 text-[#ff6900]"
                      : "text-[#101828]",
                  )}
                >
                  <span className="font-['Arial:Regular',sans-serif] text-[14px]">
                    {city}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative shrink-0 size-[40px] cursor-pointer hover:opacity-80 transition-opacity">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 40 40"
          >
            <g id="Icon">
              <path
                d={svgPaths.p3d311700}
                id="Vector"
                stroke="var(--stroke-0, #99A1AF)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
              <path
                d="M35 35L27.8333 27.8333"
                id="Vector_2"
                stroke="var(--stroke-0, #99A1AF)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// --- Main App Component ---
export default function App() {
  const [selectedRegion, setSelectedRegion] = useState("전체");

  const filteredFacilities =
    selectedRegion === "전체"
      ? facilities
      : facilities.filter((f) => f.city === selectedRegion);

  return (
    <div className="bg-gray-50 min-h-screen w-full relative">
      <Header />

      <div className="bg-white content-stretch flex flex-col items-start pb-[0.8px] pt-0 px-[16px] border-b border-black/10">
        <RegionSelector
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
        />
      </div>

      <div className="bg-gray-50 px-[16px] py-[12px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px]">
          테니스장 {filteredFacilities.length}
        </p>
      </div>

      <div className="bg-white">
        {filteredFacilities.map((facility) => (
          <TennisCourtCard
            key={facility.id}
            facility={facility}
          />
        ))}
      </div>
    </div>
  );
}