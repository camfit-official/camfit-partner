// Header 스크롤 효과
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// FAQ 토글
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');

    // 모든 FAQ 아이템 닫기
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // 클릭한 아이템이 활성 상태가 아니었다면 열기
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 페이지 로드 시 fade-in 요소들 관찰 시작
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});
