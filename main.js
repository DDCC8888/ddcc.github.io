// 动态星空背景效果
document.addEventListener('DOMContentLoaded', () => {
    // 创建更多随机星星
    const starsContainer = document.querySelector('.stars');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 2;

        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: white;
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            box-shadow: 0 0 ${size * 3}px white;
            animation: twinkle ${duration}s ease-in-out ${delay}s infinite alternate;
        `;

        starsContainer.appendChild(star);
    }

    // 鼠标移动星空视差效果
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        const stars = document.querySelectorAll('.stars div');

        stars.forEach((star, index) => {
            const depth = index % 3 + 1;
            star.style.transform = `translate(${moveX / depth}px, ${moveY / depth}px)`;
        });
    });

    // 滚动时导航栏样式变化
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 26, 0.8)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.padding = '1rem 5%';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.padding = '2rem 5%';
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 添加星空粒子动画
@keyframes twinkle {
    0% { opacity: 0.2; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.2); }
}