const {
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
} = require("../index");


test("Deve armazenar corretamente os dados do cronograma", () => {

    expect(nome).toBe("Marcos Soares");
    expect(remedio1).toBe("Losartana");
    expect(remedio2).toBe("Amoxicilina");
    expect(horarioInicial).toBe("07:00");
    expect(intervaloHoras).toBe(6);
    expect(quantidadeDoses).toBe(2);

});


test("Deve calcular corretamente os horários das doses", () => {

    expect(horarioDose1).toBe("07:00");
    expect(horarioDose2).toBe("13:00");

});


test("Deve verificar o status do cronograma", () => {

    expect(statusCronograma).toBe("Cronograma criado");

});


test("Deve gerar o resumo corretamente", () => {

    expect(resumo).toContain("Marcos Soares");
    expect(resumo).toContain("Losartana");
    expect(resumo).toContain("Amoxicilina");
    expect(resumo).toContain("07:00");
    expect(resumo).toContain("13:00");
    expect(resumo).toContain("Cronograma criado");

});
