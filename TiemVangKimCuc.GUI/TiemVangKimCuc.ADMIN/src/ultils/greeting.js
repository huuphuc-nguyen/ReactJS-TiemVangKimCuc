export const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        return 'Chào buổi sáng';
    } else if (currentHour < 18) {
        return 'Chào buổi chiều';
    } else {
        return 'Chào buổi tối';
    }
};