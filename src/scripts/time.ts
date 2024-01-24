const getDateTimeLabel = (): string => {
    const d = new Date()

    const date = d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weekday = weekDays[d.getDay()]

    return `${weekday}, ${time} | ${date}`
}

const dateTimeElement = document.getElementById('date-time')
let timeoutId: number = 0

const updateDateTimeLabel = (): void => {
    if (!dateTimeElement) return

    timeoutId = setTimeout(() => {
        dateTimeElement.innerText = getDateTimeLabel()
        updateDateTimeLabel()
    }, 1000)
}

updateDateTimeLabel()
