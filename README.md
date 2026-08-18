# 빛의 정원 — 전시 홍보 웹사이트

정적 사이트입니다. 빌드 도구나 서버가 필요 없습니다.

## 설치

아래 파일 12개를 **모두 같은 폴더 하나에** 넣고 `index.html`을 브라우저로 열면 됩니다.
하위 폴더를 만들 필요 없습니다.

```
index.html      홈 (스크롤 없이 한 화면)
artists.html    참여 작가 — 프로필 카드 목록
gallery.html    작품 갤러리 — 그리드 + 상세 보기
info.html       관람 안내 — 정보 카드 + FAQ + 지도
brand.css       전 페이지 공통 스타일 (색·글꼴·버튼)
brand.js        마스코트 커서 반응 (전 페이지 공통)
hero.webp       히어로 배경
lumi.webp       마스코트 루미
work1.webp      작품 1 — 흐르는 빛
work2.webp      작품 2 — 밤의 산책
work3.webp      작품 3 — 파동의 숲
README.md       이 파일 (업로드하지 않아도 됩니다)
```

파일 하나라도 빠지면 이미지가 안 보이거나 스타일이 풀립니다.

## 반드시 바꿔야 할 것

아래는 모두 **자리표시자**입니다. 실제 정보로 교체하세요.

| 항목 | 위치 | 현재 값 |
|---|---|---|
| 예매 링크 | 전 페이지 `<a class="book" href="#">` | `#` (동작 안 함) |
| 작가 이름 | artists.html, gallery.html | 서지우 / 한도현 / 문세린 |
| 작가 인스타그램 | artists.html `.out` | `#` |
| 요금 | 전 페이지 `.price`, info.html | 성인 22,000원 / 청소년 16,000원 |
| 주소·교통 | info.html | 금남로4가역 3번 출구 |
| 전화번호 | info.html | 062-000-0000 |
| 취소·환불 규정 | info.html FAQ | 예매처 정책과 반드시 일치시킬 것 |

예매 링크는 목적지를 미리 알려주고 새 탭으로 여는 형태를 권합니다.

```html
<a class="book" href="https://예매처주소" target="_blank" rel="noopener noreferrer">
  네이버 예약으로 예매하기
</a>
```

## 색과 글꼴 바꾸기

`brand.css` 맨 위 `:root` 블록의 변수만 고치면 네 페이지에 한꺼번에 적용됩니다.

```css
:root{
  --ink:#1B1036;    /* 기본 배경 */
  --deep:#241548;   /* 카드·아래 영역 배경 */
  --coral:#FF6B5B;  /* 예매 버튼, 현재 페이지 표시 */
  --pearl:#F3EEFF;  /* 본문 글자 */
}
```

글꼴은 각 HTML `<head>`의 Pretendard CDN 링크와 `brand.css`의 `font-family`를 함께 바꿉니다.

## 지도 넣기

`info.html`의 `.venue__map` 안이 현재 자리표시자입니다. 내용을 지우고 아래로 교체하세요.

```html
<iframe src="https://www.google.com/maps?q=광주+미디어아트+플랫폼&output=embed"
        style="width:100%;height:100%;border:0" loading="lazy" title="전시장 위치"></iframe>
```

국내 이용자 위주라면 네이버 지도 임베드나 캡처 이미지 한 장으로도 충분합니다.
아래 길찾기 링크 세 개는 검색어 기반이라 그대로 두어도 동작하며,
정확한 좌표가 정해지면 장소 ID 링크로 바꾸는 편이 정확합니다.

## 작품·작가 추가하기

**작품 추가** — `gallery.html`의 `<li>` 블록을 복사하고 `data-` 속성 값을 바꿉니다.
그리드가 `auto-fill`이라 개수에 맞춰 자동으로 줄바꿈됩니다.

**작가 추가** — `artists.html`의 `<li class="artist">` 블록을 복사합니다.
아바타 색은 `style="--c:var(--acc-1)"`에서 `--acc-1` / `--acc-2` / `--acc-3` 중 골라 씁니다.

새 이미지를 넣을 때도 같은 폴더에 두고 `<img src="파일명.webp">`처럼 파일명만 적습니다.

## 새 페이지 만들 때

1. 기존 페이지를 복사해 본문만 교체
2. `<head>`에 `<link rel="stylesheet" href="brand.css">` 유지
3. 상단 메뉴에서 **해당 페이지 링크에만** `aria-current="page"` 지정

현재 위치 표시(빛나는 점)는 이 속성 하나로 자동 적용됩니다. 별도 클래스는 필요 없습니다.

## 배포

정적 파일이므로 GitHub Pages, Netlify, Vercel, 카페24 등 어디든 파일을 통째로 올리면 됩니다.
`index.html`이 시작 페이지입니다.

한글 파일명은 서버에 따라 인코딩 문제를 일으키므로, 나중에 이미지를 추가할 때도
`work4.webp`처럼 영문·숫자로 지어주세요.

## 참고 사항

- 이미지는 원본 PNG 904KB를 WebP 79KB로 변환했습니다. 원본으로 되돌리면 첫 화면 로딩이 느려집니다.
- 홈만 `<body class="home">`으로 한 화면에 고정됩니다. 나머지는 일반 스크롤입니다.
- 「동작 줄이기」 설정을 켠 사용자에게는 모든 애니메이션이 멈춥니다.
- FAQ 아코디언은 `<details>` 태그라 자바스크립트 없이 동작합니다.
