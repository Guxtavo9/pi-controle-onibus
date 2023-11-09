function updateTime() {
    const now = new Date();
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const date = now.toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" });
    const time = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    
    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = `${dayOfWeek}, ${date}`;
  }

  updateTime();
  setInterval(updateTime, 1000);