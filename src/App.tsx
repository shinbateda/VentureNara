import { useState } from 'react';
import { Building2 as IconBuilding, Calendar as IconCalendar, CheckCircle2 as IconCheck, FileText as IconFileText } from 'lucide-react';

interface ProcessStep {
  step: string;
  desc: string;
}

interface PlatformDetail {
  title: string;
  subtitle: string;
  themeColor: string;
  bgColor: string;
  borderColor: string;
  badgeColor: string;
  dotColor: string;
  summary: {
    department: string;
    period: string;
  };
  qualifications: string[];
  process: ProcessStep[];
}

// 플랫폼별 데이터 정의
const data: Record<'venture' | 's2b', PlatformDetail> = {
  venture: {
    title: "벤처나라",
    subtitle: "창업·벤처기업 전용 공공구매 판로",
    themeColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-800",
    dotColor: "bg-blue-500",
    summary: {
      department: "조달청 주관",
      period: "연중 상시 신청 가능 (정기 지정 계획 공고 및 예비지정 제도 운영)"
    },
    qualifications: [
      "「벤처기업육성에 관한 특별조치법」에 따른 벤처기업 또는 창업 7년 이내 창업기업",
      "나라장터(G2B) 입찰참가자격 및 물품목록(물품식별번호) 등록 사전 완료",
      "직접 생산하는 신기술 및 융복합기술 관련 소비재 완성품 및 서비스 (단순 반제품 제외)",
      "필수 서류 구비: 사업자등록증, 범용 공동인증서, 국세/지방세 납세증명서 등",
      "휴업, 폐업, 부도, 파산 상태이거나 부정당업자로 제재 처분 중인 업체는 제외"
    ],
    process: [
      { step: "1단계: 사전준비", desc: "나라장터(G2B) 업체 등록 및 물품식별번호 부여받기" },
      { step: "2단계: 추천신청", desc: "기술보증기금, 한국에너지기술평가원 등 기관에 '벤처나라 상품 등록 추천' 신청" },
      { step: "3단계: 온라인신청", desc: "조달청 벤처나라 시스템을 통해 지정 신청서 및 상품 설명 자료 제출" },
      { step: "4단계: 지정심사", desc: "조달청에서 업체 자격, 품질, 공공수요 적합성 종합 평가 (통과 시 기본 6년 지정)" },
      { step: "5단계: 상품등록", desc: "벤처나라 시스템에 상품 상세 정보, 규격, 납품 조건, 가격 등 입력 후 최종 등록" }
    ]
  },
  s2b: {
    title: "학교장터 (S2B)",
    subtitle: "교육기관 및 지자체 소액 수의계약 전용",
    themeColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-800",
    dotColor: "bg-emerald-500",
    summary: {
      department: "교육부 지정 / 한국교직원공제회 운영",
      period: "연중 상시 가입 및 견적(물품) 등록 (가입 승인 약 5~7일 소요)"
    },
    qualifications: [
      "공공기관이 구매하는 소액(2천만원 이하) 물품/용역을 공급할 수 있는 사업자등록 개인 또는 법인",
      "사업자용 범용 공동인증서 발급 및 시스템 등록 필수",
      "필수 서류 시스템 제출: 사업자등록증, 납세증명서, 인감증명서 등",
      "업종별 추가 자격: 제조(KC인증 등), 건설(건설업등록증), 식품(HACCP) 등 해당 면허 요건 충족",
      "부정당업자 제재 처분 기간 중인 부적격업체는 등록 및 이용 불가"
    ],
    process: [
      { step: "1단계: 회원가입", desc: "S2B 사이트 접속 > '공급업체 등록' 메뉴를 통한 온라인 가입 및 약관 동의" },
      { step: "2단계: 서류제출", desc: "온라인 공급업체 등록신청서 작성 및 필수 서류(사업자등록증, 납세증명서 등) 등록" },
      { step: "3단계: 승인대기 및 인증서", desc: "승인 심사(약 3영업일) 완료 후, 사업자용 범용 공동인증서 시스템 등록" },
      { step: "4단계: 견적등록", desc: "시스템 내 '견적등록' 메뉴에서 물품명, 가격(부가세 포함), 상세설명, 썸네일, 배송비 설정" },
      { step: "5단계: 최종등록요청", desc: "청렴서약서 동의 후 등록 요청 (담당자 모니터링 후 약 2~3일 내 상품 노출)" }
    ]
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'venture' | 's2b'>('venture');
  
  const currentData = data[activeTab];

  return (
    <div id="procurement-guide-app" className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header id="app-header" className="mb-8 text-center pt-2">
          <h1 id="app-title" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            공공조달 물품등록 가이드
          </h1>
          <p id="app-description" className="text-slate-500 text-base sm:text-lg">
            벤처나라 및 학교장터(S2B) 신청 자격 및 절차 안내
          </p>
        </header>

        {/* Custom Tabs */}
        <div id="platform-tabs" className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
          <button
            id="tab-btn-venture"
            type="button"
            onClick={() => setActiveTab('venture')}
            className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 cursor-pointer ${
              activeTab === 'venture' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
            }`}
          >
            벤처나라
          </button>
          <button
            id="tab-btn-s2b"
            type="button"
            onClick={() => setActiveTab('s2b')}
            className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 cursor-pointer ${
              activeTab === 's2b' 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                : 'bg-white text-slate-600 hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            학교장터 (S2B)
          </button>
        </div>

        {/* Content Area */}
        <main id="guide-content-main" className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          {/* Section Header */}
          <div id="guide-content-header" className={`${currentData.bgColor} border-b ${currentData.borderColor} p-6 sm:p-8 transition-colors duration-200`}>
            <div className="flex items-center justify-between">
              <div>
                <span id="platform-badge" className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${currentData.badgeColor}`}>
                  {currentData.title}
                </span>
                <h2 id="platform-subtitle" className="text-2xl font-bold text-slate-900">
                  {currentData.subtitle}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Summary Cards */}
            <div id="summary-cards-container" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div id="summary-department-card" className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className={`mt-1 mr-4 ${currentData.themeColor} flex-shrink-0`}>
                  <IconBuilding className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">주무부서</h3>
                  <p className="font-medium text-slate-900">{currentData.summary.department}</p>
                </div>
              </div>
              <div id="summary-period-card" className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className={`mt-1 mr-4 ${currentData.themeColor} flex-shrink-0`}>
                  <IconCalendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">등록 시기</h3>
                  <p className="font-medium text-slate-900 leading-tight">{currentData.summary.period}</p>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <section id="qualifications-section">
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-3 ${currentData.bgColor} ${currentData.themeColor} flex items-center justify-center`}>
                  <IconCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">등록 자격 조건</h3>
              </div>
              <ul id="qualifications-list" className="space-y-3 ml-2">
                {currentData.qualifications.map((item, index) => (
                  <li key={index} id={`qualification-item-${index + 1}`} className="flex items-start">
                    <span className={`mr-3 mt-2 h-2 w-2 rounded-full flex-shrink-0 ${currentData.dotColor}`}></span>
                    <span className="text-slate-700 leading-relaxed text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section id="process-section">
              <div className="flex items-center mb-6 mt-4 border-t border-slate-100 pt-8">
                <div className={`p-2 rounded-lg mr-3 ${currentData.bgColor} ${currentData.themeColor} flex items-center justify-center`}>
                  <IconFileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">신청서 및 신청 방법</h3>
              </div>
              
              <div id="process-steps-list" className="space-y-4">
                {currentData.process.map((item, index) => (
                  <div
                    key={index}
                    id={`process-step-${index + 1}`}
                    className="flex p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-white shadow-xs"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-base ${currentData.badgeColor}`}>
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">{item.step}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
        
        <footer id="app-footer" className="mt-8 mb-6 text-center text-sm text-slate-500">
          <p>※ 상세 규정 및 서식은 해당 플랫폼(조달청 벤처나라, 한국교직원공제회 S2B) 공식 홈페이지를 반드시 참조하시기 바랍니다.</p>
        </footer>

      </div>
    </div>
  );
}
