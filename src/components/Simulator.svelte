<script>

    //taxas dos concorrentes
    var taxaPoupanca = Number(0.13)
    var taxaTesouroSelic =  Number(0.173)
    var taxaCdi = Number(0.25)

    //Calculo de juros compostos
    const calcOthersInvestments = (valueRescue, rental, time)=>{
        let calc = valueRescue * Math.pow((1 + (rental / 100)), time)
        let calcParse = calc.toFixed(2)
        return calc
    }

    //Calculo de juros simples
    const calcSimpleRate = (valInvest, rate, time)=>{
        let valueGain = (Number(valInvest) * Number(rate))/100       
        let valueEnd = (Number(valInvest) + Number(valueGain))
        return valueEnd
    }

    //Calculo em caso de recebimento mensal
    const calcReceivedMonth = (value, rate, time) => {    
        let valueFloat = parseFloat(value)
        let rateFloat = parseFloat(rate)/100
        let timeInt = parseInt(time)
        parcelaFloat = (valueFloat*rateFloat)/(1 - Math.pow(1/(1+rateFloat),timeInt))
        parcelaFloat = Math.round(parcelaFloat*100)/100
        return parcelaFloat
    }

    //Converte meses para dias
    const fxConvertMonthDays = (months) =>{
        let days = (months * 30.4167).toFixed(0)   
        if (days == 183) {
            days = 181
            return days
        }
        return days
    }

    // Matriz - Ao final
    const variableRate = [    

        // 1k, 2.5k, 5k, 10k
        [1.02, 1.17, 1.32, 1.62], // 90 dias
        [3.00, 3.30, 3.60, 3.90], // 181 dias 6 meses
        [8.4, 9.00, 9.6, 10.80], // 365 dias 12 meses
        [19.20, 20.40, 21.60, 24.00], // 730 dias 24 meses
        [32.40, 34.20, 36.00, 39.60], // 1095 dias 36 meses
        [48.00, 50.40, 52.80, 57.60] // 1460 dias 48 meses    
    ];

    // Matriz - Mensal
    const variableRateMonthly = [
        [0.41], // 3x
        [0.45], // 6x
        [0.60], // 12x
        [0.70], // 24x
        [0.80], // 36x
        [0.90], // 48x
    ];

    const rateCalc = (valor, prazo) => {
        let x, y

        if (valor >= 10000) x = 3
        else if (valor >= 5000) x = 2
        else if (valor >= 2500) x = 1
        else if (valor >= 1000) x = 0

        if (prazo >= 48) y = 5
        else if (prazo >= 36) y = 4
        else if (prazo >= 24) y = 3
        else if (prazo >= 12) y = 2
        else if (prazo >= 6) y = 1
        else if (prazo >= 3) y = 0

        return variableRate[y][x]
    };

    const rateCalcMonthly = (prazo) =>{
        let y
        if (prazo >= 48) y = 5
        else if (prazo >= 36) y = 4
        else if (prazo >= 24) y = 3
        else if (prazo >= 12) y = 2
        else if (prazo >= 6) y = 1
        else if (prazo >= 3) y = 0

        return variableRateMonthly[y]
    }

    const validatePersonInvest = (val, link) =>{    

        let valFloat = parseFloat(val)

        if(valFloat <= '100000' && valFloat >= '1000'){

            location.href = `${link}`

        }else{

            alert('Valor inválido! Digite e clique em SALVAR novamente.')
            exit;

        }    

    }

    //variables
    let valueInitial = 10000
    let typeInvest = true
    let monthsInvest = 3
    $: daysInvest = fxConvertMonthDays(monthsInvest)
    $: rateNow = rateCalc(valueInitial, monthsInvest)
    $: valueEnd = calcSimpleRate(valueInitial, rateNow, daysInvest)

</script>
<style>

</style>
<div>
    <p>Tipo de resgate: {typeInvest}</p>
    <div>
        <input type="checkbox" bind:checked={typeInvest}>
    </div>
    <div>
        <p>Valor: {valueInitial}</p>
        <input type="range" name="" id="" min="0" max="999999" bind:value={valueInitial}>
    </div>
    <div>
        <p>Prazo: {daysInvest}</p> 
        <p>{monthsInvest}</p>
        <input type="range" name="" id="" min="3" max="48" bind:value={monthsInvest} />
    </div>
    <div>
        <p>Valor ao final: {valueEnd}</p>
    </div>
    <div>
        <button>Finalizar investimento</button>
    </div>
</div>