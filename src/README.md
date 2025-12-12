# 공공 시설 정보 앱 (Public Facilities Info)

경기도 지역 테니스장 정보를 검색하고 확인할 수 있는 모바일 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🎾 경기도 내 8개 테니스장 정보 제공
- 🗺️ 지역별 필터링 (수원시, 성남시, 고양시 등)
- 📱 모바일 최적화 반응형 디자인
- ⏰ 운영시간, 전화번호, 휴무일 정보
- 🏷️ 코트 종류 및 예약 가능 여부 표시

## 🛠️ 기술 스택

- **React** - UI 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Vite** - 빌드 도구

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 📂 프로젝트 구조

```
/
├── App.tsx                      # 메인 앱 컴포넌트
├── imports/
│   ├── PublicFacilityInfoList.tsx  # Figma 임포트 컴포넌트
│   └── svg-jss7m11ntp.ts           # SVG 경로 데이터
├── components/
│   └── figma/
│       └── ImageWithFallback.tsx   # 이미지 컴포넌트
└── styles/
    └── globals.css                 # 전역 스타일
```

## 🎨 디자인

Figma 디자인을 기반으로 제작되었습니다.

## 📄 라이선스

- **코드**: MIT License
- **이미지**: [Unsplash License](https://unsplash.com/license)

## 🚀 배포

이 프로젝트는 Vercel, Netlify 등의 플랫폼에 배포할 수 있습니다.

## 📝 데이터

현재 앱에는 8개의 테니스장 샘플 데이터가 포함되어 있습니다:
- 수원월드컵공원 테니스장
- 탄천종합운동장 테니스장
- 고양종합운동장 테니스장
- 용인시민체육공원 테니스장
- 부천종합운동장 테니스장
- 안산와동 테니스장
- 평촌중앙공원 테니스장
- 남양주체육문화센터 테니스장

---

Made with ❤️ using Figma Make
