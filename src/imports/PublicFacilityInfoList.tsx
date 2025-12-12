import svgPaths from "./svg-jss7m11ntp";
import clsx from "clsx";

function Button5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[59.987px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center px-0 py-[8px] relative size-full">{children}</div>
    </div>
  );
}

function Container68({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[99.988px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}

function Container67({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-gray-200 relative rounded-[10px] shrink-0 size-[80px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper3 additionalClassNames={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>{children}</Wrapper3>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper3 additionalClassNames={clsx("h-[40px] relative rounded-[2.68435e+07px] shrink-0", additionalClassNames)}>{children}</Wrapper3>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

function Icon8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Container66({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[99.988px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TextText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText3({ text, additionalClassNames = "" }: TextText3Props) {
  return (
    <div className={clsx("h-[15.988px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">{text}</p>
      </div>
    </div>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[555.6px]">
      <TextText2 text="전화" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[28px] not-italic text-[#6a7282] text-[14px] top-[-1.2px] w-[102px]">{text}</p>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="absolute h-[20px] left-[563.6px] top-0 w-[555.6px]">
      <TextText2 text="휴무" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[28px] not-italic text-[#6a7282] text-[14px] top-[-1.2px] w-[61px]">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="content-stretch flex h-[15.988px] items-start overflow-clip relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px]">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="absolute h-[20px] left-[563.6px] top-0 w-[555.6px]">
      <TextText2 text="휴무" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[28px] not-italic text-[#6a7282] text-[14px] top-[-1.2px] w-[80px]">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[555.6px]">
      <TextText2 text="전화" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[28px] not-italic text-[#6a7282] text-[14px] top-[-1.2px] w-[94px]">{text}</p>
    </div>
  );
}
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[28px]">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">{text}</p>
    </div>
  );
}
type Container36Props = {
  additionalClassNames?: string;
};

function Container36({ additionalClassNames = "" }: Container36Props) {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full">
      <TextText1 text="하드코트 8면" additionalClassNames="left-0 w-[86.838px]" />
      <TextText1 text="예약가능" additionalClassNames="left-[90.84px] w-[64px]" />
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("absolute bg-gray-100 content-stretch flex h-[19.988px] items-start px-[8px] py-[2px] rounded-[4px] top-0", additionalClassNames)}>
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">{text}</p>
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_1_430)" id="Icon">
        <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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

function Text10({ text, additionalClassNames = "" }: Text10Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid relative size-full", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <Text10 text={text} additionalClassNames="overflow-clip rounded-[inherit]" />
    </div>
  );
}

function Icon() {
  return (
    <Wrapper>
      <g id="Icon">
        <path d={svgPaths.p1539e500} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">{text}</p>
    </div>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <Wrapper1 additionalClassNames="bg-gray-100 w-[96px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[48.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[5.8px] translate-x-[-50%] whitespace-pre">{text}</p>
    </Wrapper1>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <Wrapper1 additionalClassNames="bg-gray-100 w-[80px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[40.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[5.8px] translate-x-[-50%] whitespace-pre">{text}</p>
    </Wrapper1>
  );
}

function Button() {
  return (
    <Wrapper1 additionalClassNames="bg-[#ff6900] w-[64px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-center text-nowrap text-white top-[5.8px] translate-x-[-50%] whitespace-pre">전체</p>
    </Wrapper1>
  );
}

function RegionSelector() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-start overflow-clip relative shrink-0 w-full" data-name="RegionSelector">
      <Button />
      <ButtonText text="수원시" />
      <ButtonText text="성남시" />
      <ButtonText text="고양시" />
      <ButtonText text="용인시" />
      <ButtonText text="부천시" />
      <ButtonText text="안산시" />
      <ButtonText text="안양시" />
      <ButtonText1 text="남양주시" />
      <ButtonText text="화성시" />
      <ButtonText text="평택시" />
      <ButtonText1 text="의정부시" />
      <ButtonText text="시흥시" />
      <ButtonText text="파주시" />
      <ButtonText text="김포시" />
      <ButtonText text="광명시" />
      <ButtonText text="광주시" />
      <ButtonText text="군포시" />
      <ButtonText text="하남시" />
      <ButtonText text="오산시" />
      <ButtonText text="양주시" />
      <ButtonText text="이천시" />
      <ButtonText text="구리시" />
      <ButtonText text="안성시" />
      <ButtonText text="포천시" />
      <ButtonText text="의왕시" />
      <ButtonText text="양평군" />
      <ButtonText text="여주시" />
      <ButtonText1 text="동두천시" />
      <ButtonText text="가평군" />
      <ButtonText text="과천시" />
      <ButtonText text="연천군" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[56.8px] items-start left-0 pb-[0.8px] pt-0 px-[16px] top-[128px] w-[1151.2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <RegionSelector />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute bg-gray-50 h-[20px] left-[16px] top-[196.8px] w-[1119.2px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1.2px] w-[69px]">테니스장 8</p>
    </div>
  );
}

function Image() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (수원월드컵공원 테니스장)" />;
}

function Container1() {
  return (
    <Container67>
      <Image />
    </Container67>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[1023.2px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">수원월드컵공원 테니스장</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-0 top-[28px] w-[1023.2px]" data-name="Container">
      <Icon />
      <TextText text="수원시" additionalClassNames="w-[42px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="06:00~21:00" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-0 top-[52px] w-[1023.2px]" data-name="Container">
      <Icon1 />
      <Text />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[19.988px] left-0 top-[80px] w-[1023.2px]" data-name="Container">
      <TextText1 text="하드코트 8면" additionalClassNames="left-0 w-[86.838px]" />
      <TextText1 text="예약가능" additionalClassNames="left-[90.84px] w-[64px]" />
    </div>
  );
}

function Container5() {
  return (
    <Wrapper2 additionalClassNames="h-[99.988px]">
      <Heading />
      <Container2 />
      <Container3 />
      <Container4 />
    </Wrapper2>
  );
}

function Container6() {
  return (
    <Container66>
      <Container1 />
      <Container5 />
    </Container66>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="031-228-4582" />
      <ContainerText1 text="매주 월요일" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container7 />
      <ParagraphText text="경기도 수원시 팔달구 월드컵로 310" />
    </div>
  );
}

function TennisCourtCard() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201.575px] items-start left-0 pb-[0.8px] pt-[16px] px-[16px] top-0 w-[1151.2px]" data-name="TennisCourtCard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Image1() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (탄천종합운동장 테니스장)" />;
}

function Container9() {
  return (
    <Container67>
      <Image1 />
    </Container67>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <TextText text="성남시" additionalClassNames="w-[42px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="05:00~22:00" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full" data-name="Container">
      <TextText1 text="클레이코트 12면" additionalClassNames="left-0 w-[105.438px]" />
      <TextText1 text="예약가능" additionalClassNames="left-[109.44px] w-[64px]" />
    </div>
  );
}

function Container13() {
  return (
    <Container68>
      <HeadingText text="탄천종합운동장 테니스장" />
      <Container10 />
      <Container11 />
      <Container12 />
    </Container68>
  );
}

function Container14() {
  return (
    <Container66>
      <Container9 />
      <Container13 />
    </Container66>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="031-729-3648" />
      <ContainerText2 text="연중무휴" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container15 />
      <ParagraphText text="경기도 성남시 분당구 야탑로 215" />
    </div>
  );
}

function TennisCourtCard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201.575px] items-start left-0 pb-[0.8px] pt-[16px] px-[16px] top-[201.57px] w-[1151.2px]" data-name="TennisCourtCard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Image2() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (고양종합운동장 테니스장)" />;
}

function Container17() {
  return (
    <Container67>
      <Image2 />
    </Container67>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <TextText text="고양시" additionalClassNames="w-[42px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="06:00~20:00" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full" data-name="Container">
      <TextText1 text="하드코트 6면" additionalClassNames="left-0 w-[86.838px]" />
      <TextText1 text="예약가능" additionalClassNames="left-[90.84px] w-[64px]" />
    </div>
  );
}

function Container21() {
  return (
    <Container68>
      <HeadingText text="고양종합운동장 테니스장" />
      <Container18 />
      <Container19 />
      <Container20 />
    </Container68>
  );
}

function Container22() {
  return (
    <Container66>
      <Container17 />
      <Container21 />
    </Container66>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText3 text="031-8075-4200" />
      <ContainerText1 text="매주 화요일" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container23 />
      <ParagraphText text="경기도 고양시 덕양구 동산로 140" />
    </div>
  );
}

function TennisCourtCard2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201.575px] items-start left-0 pb-[0.8px] pt-[16px] px-[16px] top-[403.15px] w-[1151.2px]" data-name="TennisCourtCard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Image3() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (용인시민체육공원 테니스장)" />;
}

function Container25() {
  return (
    <Container67>
      <Image3 />
    </Container67>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <TextText text="용인시" additionalClassNames="w-[42px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="07:00~19:00" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full" data-name="Container">
      <TextText1 text="인조잔디코트 10면" additionalClassNames="left-0 w-[117.438px]" />
      <TextText1 text="예약가능" additionalClassNames="left-[121.44px] w-[64px]" />
    </div>
  );
}

function Container29() {
  return (
    <Container68>
      <HeadingText text="용인시민체육공원 테니스장" />
      <Container26 />
      <Container27 />
      <Container28 />
    </Container68>
  );
}

function Container30() {
  return (
    <Container66>
      <Container25 />
      <Container29 />
    </Container66>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="031-324-2661" />
      <ContainerText1 text="매주 수요일" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container31 />
      <ParagraphText text="경기도 용인시 처인구 금학로 246" />
    </div>
  );
}

function TennisCourtCard3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201.575px] items-start left-0 pb-[0.8px] pt-[16px] px-[16px] top-[604.73px] w-[1151.2px]" data-name="TennisCourtCard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Image4() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (부천종합운동장 테니스장)" />;
}

function Container33() {
  return (
    <Container67>
      <Image4 />
    </Container67>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <TextText text="부천시" additionalClassNames="w-[42px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="06:00~21:00" />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text4 />
    </div>
  );
}

function Container37() {
  return (
    <Container68>
      <HeadingText text="부천종합운동장 테니스장" />
      <Container34 />
      <Container35 />
      <Container36 />
    </Container68>
  );
}

function Container38() {
  return (
    <Container66>
      <Container33 />
      <Container37 />
    </Container66>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="032-625-7979" />
      <ContainerText2 text="연중무휴" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container39 />
      <ParagraphText text="경기도 부천시 원미구 길주로 1" />
    </div>
  );
}

function TennisCourtCard4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201.575px] items-start left-0 pb-[0.8px] pt-[16px] px-[16px] top-[806.3px] w-[1151.2px]" data-name="TennisCourtCard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container38 />
      <Container40 />
    </div>
  );
}

function Image5() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (안산와동 테니스장)" />;
}

function Container41() {
  return (
    <Container67>
      <Image5 />
    </Container67>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <TextText text="안산시" additionalClassNames="w-[42px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="06:00~22:00" />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text5 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full" data-name="Container">
      <TextText1 text="클레이코트 6면" additionalClassNames="left-0 w-[98.838px]" />
      <TextText1 text="예약가능" additionalClassNames="left-[102.84px] w-[64px]" />
    </div>
  );
}

function Container45() {
  return (
    <Container68>
      <HeadingText text="안산와동 테니스장" />
      <Container42 />
      <Container43 />
      <Container44 />
    </Container68>
  );
}

function Container46() {
  return (
    <Container66>
      <Container41 />
      <Container45 />
    </Container66>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="031-481-3995" />
      <ContainerText1 text="매주 월요일" />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container47 />
      <ParagraphText text="경기도 안산시 단원구 선부광장남로 24" />
    </div>
  );
}

function TennisCourtCard5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201.575px] items-start left-0 pb-[0.8px] pt-[16px] px-[16px] top-[1007.88px] w-[1151.2px]" data-name="TennisCourtCard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container46 />
      <Container48 />
    </div>
  );
}

function Image6() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (평촌중앙공원 테니스장)" />;
}

function Container49() {
  return (
    <Container67>
      <Image6 />
    </Container67>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <TextText text="안양시" additionalClassNames="w-[42px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="05:00~21:00" />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text6 />
    </div>
  );
}

function Container52() {
  return (
    <Container68>
      <HeadingText text="평촌중앙공원 테니스장" />
      <Container50 />
      <Container51 />
      <Container36 />
    </Container68>
  );
}

function Container53() {
  return (
    <Container66>
      <Container49 />
      <Container52 />
    </Container66>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText3 text="031-8045-5800" />
      <ContainerText2 text="연중무휴" />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container54 />
      <ParagraphText text="경기도 안양시 동안구 시민대로 230" />
    </div>
  );
}

function TennisCourtCard6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[201.575px] items-start left-0 pb-[0.8px] pt-[16px] px-[16px] top-[1209.45px] w-[1151.2px]" data-name="TennisCourtCard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container53 />
      <Container55 />
    </div>
  );
}

function Image7() {
  return <div className="h-[80px] shrink-0 w-full" data-name="Image (남양주체육문화센터 테니스장)" />;
}

function Container56() {
  return (
    <Container67>
      <Image7 />
    </Container67>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <TextText text="남양주시" additionalClassNames="w-[56px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.625px]" data-name="Text">
      <Text10 text="06:00~20:00" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text7 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full" data-name="Container">
      <TextText1 text="하드코트 4면" additionalClassNames="left-0 w-[86.838px]" />
      <TextText1 text="예약가능" additionalClassNames="left-[90.84px] w-[64px]" />
    </div>
  );
}

function Container60() {
  return (
    <Container68>
      <HeadingText text="남양주체육문화센터 테니스장" />
      <Container57 />
      <Container58 />
      <Container59 />
    </Container68>
  );
}

function Container61() {
  return (
    <Container66>
      <Container56 />
      <Container60 />
    </Container66>
  );
}

function Container62() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="031-590-8567" />
      <ContainerText1 text="매주 목요일" />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56.788px] items-start pb-0 pt-[12.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container62 />
      <ParagraphText text="경기도 남양주시 화도읍 경춘로 2110" />
    </div>
  );
}

function TennisCourtCard7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[200.775px] items-start left-0 pb-0 pt-[16px] px-[16px] top-[1411.03px] w-[1151.2px]" data-name="TennisCourtCard">
      <Container61 />
      <Container63 />
    </div>
  );
}

function TennisCourtList() {
  return (
    <div className="absolute h-[1611.8px] left-0 top-[228.8px] w-[1151.2px]" data-name="TennisCourtList">
      <TennisCourtCard />
      <TennisCourtCard1 />
      <TennisCourtCard2 />
      <TennisCourtCard3 />
      <TennisCourtCard4 />
      <TennisCourtCard5 />
      <TennisCourtCard6 />
      <TennisCourtCard7 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 h-[1840.6px] left-0 top-0 w-[1151.2px]" data-name="App">
      <Container />
      <Paragraph />
      <TennisCourtList />
    </div>
  );
}

function Text8() {
  return (
    <Wrapper2 additionalClassNames="h-[24px]">
      <div className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">
        <p className="mb-0">수원</p>
        <p>&nbsp;</p>
      </div>
    </Wrapper2>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center p-px relative size-full">
        <Text8 />
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3d311700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M35 35L27.8333 27.8333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Icon3 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-0 pb-[0.8px] pt-[12px] px-[16px] top-0 w-[1151px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Container65 />
    </div>
  );
}

function Icon4() {
  return (
    <Icon8>
      <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon8>
  );
}

function Text9() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff6900] text-[12px] text-center">홈</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <Button5>
      <Icon4 />
      <Text9 />
    </Button5>
  );
}

function Icon5() {
  return (
    <Icon8>
      <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon8>
  );
}

function Button2() {
  return (
    <Button5>
      <Icon5 />
      <TextText3 text="동네생활" additionalClassNames="w-[48px]" />
    </Button5>
  );
}

function Icon6() {
  return (
    <Icon8>
      <path d={svgPaths.p3c61fe80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon8>
  );
}

function Button3() {
  return (
    <Button5>
      <Icon6 />
      <TextText3 text="채팅" additionalClassNames="w-[24px]" />
    </Button5>
  );
}

function Icon7() {
  return (
    <Icon8>
      <path d={svgPaths.p67f12c8} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon8>
  );
}

function Button4() {
  return (
    <Button5>
      <Icon7 />
      <TextText3 text="나의 당근" additionalClassNames="w-[52.225px]" />
    </Button5>
  );
}

function BottomNav() {
  return (
    <div className="absolute bg-white content-stretch flex h-[59.987px] items-center justify-between left-0 pb-0 pt-[0.8px] px-0 top-[669.61px] w-[1151.2px]" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

export default function PublicFacilityInfoList() {
  return (
    <div className="bg-white relative size-full" data-name="Public Facility Info List">
      <App />
      <Header />
      <BottomNav />
    </div>
  );
}