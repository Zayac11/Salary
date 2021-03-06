export const getDateOfRegistration = (status, course) => {

    let today = new Date()

    let data
    if(status === 'Master') {
        if(course === '1' || course === '2' || course === '6') { //Если ещё учится
            if(today.getDate() !== 1) { //Если сегодня не первое число, то на следующий месяц первого
                data = new Date(today.getFullYear(), today.getMonth() + 1, 1)
            }
            else {
                data = new Date(today.getFullYear(), today.getMonth(), 1)
            }
        }
        else if(course === '0') { //Если выпускник маги, то дату ставим 1 сен
            if (today.getMonth() < 8) {
                data = new Date(today.getFullYear(), 8, 1)
            }
            else
                data = new Date(today.getFullYear() + 1, 8, 1)
        }
    }

    else if (status === 'PreCandidate') {
        if(course === '6' || course === '1' || course === '2' || course === '3' || course === '4') { //Если выпускник или ещё учится
            if(today.getDate() !== 1) { //Если сегодня не первое число, то на следующий месяц первого
                data = new Date(today.getFullYear(), today.getMonth() + 1, 1)
            }
            else {
                data = new Date(today.getFullYear(), today.getMonth(), 1)
            }
        }
        else if(course === '0') { //Если он поступает в аспирантуру, то он окончил спец или магу и может работать со след месяца
            if (today.getMonth() < 8) {
                data = new Date(today.getFullYear(), 8, 1)
            }
            else
                data = new Date(today.getFullYear() + 1, 8, 1)
        }
    }

    else if (status === 'Bachelor') {
        if(course !== '6') {
            if(today.getMonth() < 8) { //Если он учится в бакалавриате или поступает, то расчитываем ему 1 сен, когда он поступит в магу
                data = new Date(today.getFullYear() + 4 - Math.floor(course), 8, 1)
            }
            else
                data = new Date(today.getFullYear() + 5 - Math.floor(course), 8, 1)
        }
        else { //Если он выпускник бакалвриата, то расчитываем ему оформление 1 сен след уч года
            if(today.getMonth() < 8) {
                data = new Date(today.getFullYear(), 8, 1)
            }
            else
                data = new Date(today.getFullYear() + 1, 8, 1)
        }
    }
    else if (status === 'Specialist') {
        if(course !== '6') {
            if(today.getMonth() < 8) { //Если он учится в спец или поступает, то расчитываем ему 1 сен, когда он поступит в аспирантуру
                data = new Date(today.getFullYear() + 5 - Math.floor(course), 8, 1)
            }
            else
                data = new Date(today.getFullYear() + 6 - Math.floor(course), 8, 1)
        }
        else { //Если он выпускник специалитета, то он может работать с 1 числа след месяца
            if(today.getDate() !== 1) { //Если сегодня не первое число, то на следующий месяц первого
                data = new Date(today.getFullYear(), today.getMonth() + 1, 1)
            }
            else {
                data = new Date(today.getFullYear(), today.getMonth(), 1)
            }
        }
    }
    if (data.getMonth() === 6 && status === 'Master' && course !== '6') {
        data = new Date(data.getFullYear(), data.getMonth() + 2, 1)
    }
    else if (data.getMonth() === 7 && status === 'Master' && course !== '6') {
        data = new Date(data.getFullYear(), data.getMonth() + 1, 1)
    }

    return data
}
