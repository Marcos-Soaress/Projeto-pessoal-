const nome = "Marcos Soares";
const remedio1 = "Losartana";
const remedio2 = "Amoxicilina";
const horarioInicial = "07:00";
const intervaloHoras = 6;
const quantidadeDoses = 2;

const [hora, minuto] = horarioInicial.split(":").map(Number);

let data = new Date();
data.setHours(hora, minuto, 0, 0);

let horarioDose1 = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
});

data.setHours(data.getHours() + intervaloHoras);

let horarioDose2 = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
});

let statusCronograma;

if (quantidadeDoses === 2 && intervaloHoras > 0) {
    statusCronograma = "Cronograma criado";
} else {
    statusCronograma = "Cronograma inválido";
}

const resumo = `
===== CRONOGRAMA DE MEDICAMENTOS =====

Nome: ${nome}

Medicamento 1: ${remedio1}
Medicamento 2: ${remedio2}

Horário inicial: ${horarioInicial}
Intervalo: ${intervaloHoras} horas
Quantidade de doses: ${quantidadeDoses}

Dose 1: ${horarioDose1}
Dose 2: ${horarioDose2}

Situação: ${statusCronograma}
`;

module.exports = {
    nome,
    remedio1,
    remedio2,
    horarioInicial,
    intervaloHoras,
    quantidadeDoses,
    horarioDose1,
    horarioDose2,
    statusCronograma,
    resumo
};
