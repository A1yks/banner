import elements from './elements';

const planLinks = ['https://apple.com', 'https://google.com'];

function changePlan(planIndex) {
    elements.blocks.plans.forEach((planElement, index) => {
        if (index === planIndex) {
            planElement.classList.add('plan-card--selected');
        } else {
            planElement.classList.remove('plan-card--selected');
        }
    });

    elements.translation.btn.href = planLinks[planIndex];
}

elements.blocks.plans.forEach((planElement, index) => {
    planElement.addEventListener('click', () => {
        changePlan(index);
    });
});
