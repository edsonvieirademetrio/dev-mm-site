Vue.filter('formatMoney', function (value) {
    if (!value || value === null || value === '') {
        return 'R$ 0,00'
    }
    if (typeof 'string') value = parseFloat(value)

    function numberToReal(numero) {
        numero = numero.toFixed(2).split('.')
        numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.')
        return numero.join(',')
    }

    let x = numberToReal(value)
    return x
})

Vue.filter('formatPerc', function (value) {
    if (!value) {
        return '0,00 %'
    }

    function numberToReal(numero) {
        numero = numero.toFixed(2).split('.')
        numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.')
        return numero.join(',') + ' %'
    }
    let x = numberToReal(value)
    return x
})

Vue.filter('formatDate', function (value) {
    if (value === null) {
        return null
    }
    return new Date(value).toLocaleString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
})

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString().toLowerCase()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('convertMonthDays', (value)=>{
    let days = (value * 30.4167).toFixed(0)   
    if (days == 183) {
        days = 181
    }
    if (value == 3) {
        days = 90
    }
    let daysView = `${days} dias(s)`
    return daysView
})

Vue.filter('convertMonthDaysOnlyNumber', (value)=>{
    let days = (value * 30.4167).toFixed(0)   
    if (days == 183) {
        days = 181
    }
    if (value == 3) {
        days = 90
    }
    let daysView = `${days}`
    return daysView
})