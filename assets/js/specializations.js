"use strict";

window.WOW_SPECS = {
  sheetUrl: "https://docs.google.com/spreadsheets/d/1kKJyJ_sHOh2pIMTDjI2c1wIKFeRj2f_S/edit",
  note: "Los nombres de los árboles y nodos están en español de México (esMX), verificados en Wowhead. Cocina y Pesca no tienen árbol de especialización en Midnight.",

  alquimia: {
    gid: "100445853",
    objectiveMap: { mass: "flasks", quality: "flasks" },
    trees: [
      { name: "Destreza en pociones", focus: "Pociones", desc: "Pociones del Vacío y de la Luz; desbloquea el caldero de pociones con 30 puntos." },
      { name: "Dominio de frascos", focus: "Frascos y ampollas", desc: "Frascos, ampollas y duración pasiva; caldero de frascos con 30 puntos." },
      { name: "Autoridad en transmutaciones", focus: "Transmutaciones", desc: "Motas, conversiones de materiales, Sinergista maravilloso y Piedra de alquimista." },
      { name: "Maestría alquímica", focus: "Atributos de fabricación", desc: "Mejora Fabricación múltiple, Inventiva e Ingenio para toda la profesión." }
    ],
    builds: [
      {
        id: "flasks", label: "Vender frascos", tag: "Casa de subastas",
        summary: "La línea de mayor demanda para banda y M+. Empieza por Fabricación múltiple y añade Inventiva para mejorar el margen.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Dominio de frascos (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_flasks", note: "Desbloquea la rama de frascos." },
          { pts: 10, node: "Especialista sin'dorei", icon: "inv_12_profession_alchemy_flask_sindoreipotion_red--", note: "" },
          { pts: 20, node: "Abundancia de frascos", icon: "inv_12_profession_alchemy_flask_sindoreipotion_black", note: "Máxima Fabricación múltiple para frascos." },
          { pts: 10, node: "Maestría alquímica (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_generalalchemy-", note: "" },
          { pts: 20, node: "Reciclar", icon: "inv_12_profession_alchemy_lightpotion_basic", note: "Inventiva para gastar menos materiales." },
          { pts: 20, node: "Dominio de frascos (30 total)", icon: "inv_12_profession_alchemy_alhemyspecializations_flasks", note: "Desbloquea el caldero de frascos sin'dorei." },
          { pts: 20, node: "Especialista sin'dorei", icon: "inv_12_profession_alchemy_flask_sindoreipotion_red--", note: "Completa la rama." },
          { pts: 20, node: "Maestría alquímica", icon: "inv_12_profession_alchemy_alhemyspecializations_generalalchemy-", note: "Completa los atributos." }
        ],
        after: "Si juegas banda o M+, empieza con 15 puntos en Dominio de frascos para la duración y después sigue esta configuración.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      },
      {
        id: "phials", label: "Vender ampollas", tag: "Casa de subastas",
        summary: "Mercado más pequeño que los frascos, pero con menos competencia. La ruta es casi idéntica, cambiando Especialista sin'dorei por Secretos haranir.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Dominio de frascos (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_flasks", note: "" },
          { pts: 10, node: "Secretos haranir", icon: "inv_12_profession_alchemy_flask_haranirpotion_green", note: "" },
          { pts: 20, node: "Abundancia de ampollas", icon: "inv_12_profession_alchemy_flask_haranirpotion_purple", note: "Máxima Fabricación múltiple para ampollas." },
          { pts: 10, node: "Maestría alquímica (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_generalalchemy-", note: "" },
          { pts: 20, node: "Reciclar", icon: "inv_12_profession_alchemy_lightpotion_basic", note: "Inventiva." },
          { pts: 20, node: "Dominio de frascos (30 total)", icon: "inv_12_profession_alchemy_alhemyspecializations_flasks", note: "Desbloquea el caldero." },
          { pts: 20, node: "Secretos haranir", icon: "inv_12_profession_alchemy_flask_haranirpotion_green", note: "Completa la rama." },
          { pts: 20, node: "Maestría alquímica", icon: "inv_12_profession_alchemy_alhemyspecializations_generalalchemy-", note: "Completa los atributos." }
        ],
        after: "Si el mercado de ampollas está flojo, cambia a frascos o pociones; la estructura de puntos es la misma.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      },
      {
        id: "potions", label: "Vender pociones", tag: "Casa de subastas",
        summary: "Elige Vacío o Luz y maximiza Fabricación múltiple antes de buscar calidad Oro. Buena demanda, pero más competencia que frascos.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Destreza en pociones (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_potions-", note: "Abre las sub-ramas Vacío y Luz." },
          { pts: 10, node: "Camino del Vacío o Camino de la luz", icon: "inv_12_profession_alchemy_voidpotion_violet", note: "Elige una sola rama." },
          { pts: 20, node: "Pocionista prolífico (Vacío o Luz)", icon: "inv_12_profession_alchemy_voidpotion_red", note: "Máxima Fabricación múltiple." },
          { pts: 10, node: "Maestría alquímica (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_generalalchemy-", note: "" },
          { pts: 20, node: "Reutilizar", icon: "inv_12_profession_alchemy_alchemyreagents_purple", note: "Inventiva para pociones." },
          { pts: 30, node: "Destreza en pociones (total)", icon: "inv_12_profession_alchemy_alhemyspecializations_potions-", note: "Desbloquea el caldero Vacioluz." },
          { pts: 30, node: "Camino del Vacío o Luz", icon: "inv_12_profession_alchemy_voidpotion_violet", note: "Completa la rama elegida." },
          { pts: 30, node: "Maestría alquímica", icon: "inv_12_profession_alchemy_alhemyspecializations_generalalchemy-", note: "Completa los atributos." }
        ],
        after: "Para una segunda línea de producto, replica la configuración en la otra rama (Vacío/Luz) o cambia a frascos.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      },
      {
        id: "transmutes", label: "Transmutaciones y diarias", tag: "Reutilización diaria",
        summary: "La configuración de oro pasivo: reduce la reutilización de Sinergista maravilloso y luego añade Inventiva.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Autoridad en transmutaciones (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_transmutation", note: "Desbloquea Maestría metamórfica y Sinergia sintetizadora." },
          { pts: 20, node: "Maestría metamórfica", icon: "inv_12_profession_alchemy_flask_haranirpotion_orange", note: "Fabricación múltiple para transmutaciones de motas." },
          { pts: 20, node: "Sinergia sintetizadora", icon: "spell_animaardenweald_orb", note: "Reduce la reutilización de Sinergista maravilloso de ~18 h a ~9 h." },
          { pts: 10, node: "Maestría alquímica (raíz)", icon: "inv_12_profession_alchemy_alhemyspecializations_generalalchemy-", note: "" },
          { pts: 20, node: "Reducción", icon: "inv_12_profession_alchemy_voidpotion_purple", note: "Inventiva para todas las transmutaciones." }
        ],
        after: "Si buscas calidad Oro, añade 20 puntos a la raíz de Autoridad en transmutaciones y maximiza Maestría alquímica. Las transmutaciones de materiales no pueden usar Fabricación múltiple.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Regla rápida: si la receta puede usar Fabricación múltiple, usa Fabricación múltiple; si no, usa Inventiva.",
      "Las transmutaciones de materiales no se benefician de Fabricación múltiple; las de motas y Sinergista maravilloso sí."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/alchemy-specializations"
  },

  herreria: {
    gid: "1370887411",
    objectiveMap: { gear: "standard", consumables: "auction" },
    trees: [
      { name: "Proveedor de oficios", focus: "Herramientas de profesión", desc: "Herramientas para otros fabricantes y Piedras de herramientas que dan atributos temporales." },
      { name: "Las antiguas tradiciones", focus: "Atributos y aleaciones", desc: "Fabricación múltiple, Inventiva e Ingenio para toda la profesión; rama de aleaciones." },
      { name: "Forja de armaduras", focus: "Armaduras de placas", desc: "Las 9 piezas de armadura: cabeza, pecho, piernas, hombros, manos, cintura, muñecas, pies y escudos." },
      { name: "Forja de armas", focus: "Armas", desc: "Espadas, hachas, mazas, dagas, armas de asta y guadañas; incluye Piedras de armas." }
    ],
    builds: [
      {
        id: "standard", label: "Equipo propio", tag: "Armadura o armas",
        summary: "La opción más segura si quieres ser autosuficiente y fabricar tu equipo de temporada.",
        stats: ["inventiva", "multicraft", "ingenio"],
        steps: [
          { pts: 30, node: "Forja de armaduras o Forja de armas (raíz)", icon: "inv_12_profession_blacksmithing_armorsmithing", note: "Elige armadura o armas antes de invertir." },
          { pts: 30, node: "Sub-rama de la ranura elegida", icon: "ui_profession_blacksmithing", note: "Armadura: cintura/muñecas/manos, cabeza/hombros/pies o pecho/piernas/escudo. Armas: con empuñadura u hojas." },
          { pts: 20, node: "Nodo del ítem concreto", icon: "ui_profession_blacksmithing", note: "Maximiza una sola ranura antes de abrir otra ranura." }
        ],
        after: "Después maximiza las otras ranuras de la misma rama o pasa a la otra especialidad. No repartas puntos entre todas las ramas al inicio.",
        source: "https://www.wow-professions.com/midnight/blacksmithing-specialization-guide-and-builds"
      },
      {
        id: "orders", label: "Pedidos de fabricación", tag: "Chat de comercio",
        summary: "Para llenar pedidos de armadura o armas. Necesitas especializarte en una ranura para llegar a rango máximo sin Concentración.",
        stats: ["inventiva", "ingenio"],
        steps: [
          { pts: 30, node: "Raíz de Forja de armaduras o Forja de armas", icon: "inv_12_profession_blacksmithing_armorsmithing", note: "" },
          { pts: 30, node: "Sub-rama de la ranura", icon: "ui_profession_blacksmithing", note: "Ej.: Armaduras esculpidas, Armaduras de placas grandes, Armas con empuñadura o Hojas." },
          { pts: 20, node: "Nodo del ítem concreto", icon: "ui_profession_blacksmithing", note: "Ej.: yelmo, hacha grande, muñeca." }
        ],
        after: "Si el volumen de pedidos es bajo, invierte en Herrero ingenioso (Las antiguas tradiciones) para recuperar materiales. La alternativa de herramientas de profesión es 30 en Proveedor de oficios + 25 en Herramientas del oficio/Accesorios del oficio.",
        source: "https://www.wow-professions.com/midnight/blacksmithing-specialization-guide-and-builds"
      },
      {
        id: "auction", label: "Aleaciones y consumibles", tag: "Casa de subastas",
        summary: "Producción masiva de aleaciones para vender. Es la rama más líquida y constante de Herrería.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 40, node: "Las antiguas tradiciones (raíz)", icon: "inv_blacksmith_anvil", note: "Maximiza la raíz de atributos." },
          { pts: 20, node: "Trabajador prolífico", icon: "inv_ingot_platinum", note: "Fabricación múltiple para aleaciones." },
          { pts: 20, node: "Herrero ingenioso", icon: "inv_ore_adamantite_nugget", note: "Inventiva si vendes con margen; elige calidad Oro si ya tienes herramientas azules y habilidad 100." }
        ],
        after: "Para Piedras de herramientas: 30 en Proveedor de oficios + 25 en Piedras de herramientas. Para Piedras de armas: 30 en Forja de armas + 25 en Piedras de armas.",
        source: "https://www.wow-professions.com/midnight/blacksmithing-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Para armadura, prioriza las ranuras que no compiten con conjunto: muñecas, cintura y botas.",
      "Las armas suelen dar una mejora mayor, pero la armadura ofrece más opciones de ranuras."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/blacksmithing-specializations"
  },

  encantamiento: {
    gid: "1264885717",
    objectiveMap: { gear: "selling", oils: "oils" },
    trees: [
      { name: "Equipo elevado", focus: "Encantamientos de equipo", desc: "Encantamientos de armas, anillos, pecho, botas, etc., organizados por estilo thalassiano, amani y haranir." },
      { name: "Transitorios, tónicos y herramientas", focus: "Aceites y herramientas", desc: "Aceites de maná, varitas de combate, varitas de encantador e ilusiones temporales." },
      { name: "Delegado de desencantamiento", focus: "Desencantar", desc: "Mejores materiales al desencantar objetos verdes, azules y épicos." },
      { name: "Destructor de magia", focus: "Atributos de fabricación", desc: "Fabricación múltiple, Ingenio y Inventiva para encantamientos; reduce el coste de Concentración." }
    ],
    builds: [
      {
        id: "concentration", label: "Concentración / pocas fabricaciones", tag: "Poco tiempo",
        summary: "Para quien no quiere cuidar la subasta: acumula Concentración, fabrica un encantamiento de calidad y vuelve en unos días.",
        stats: ["ingenio", "inventiva"],
        steps: [
          { pts: 20, node: "Destructor de magia (raíz)", icon: "inv_12_profession_enchanting_spellboundshatterer", note: "Las bonificaciones de Concentración se maximizan con 20." },
          { pts: 30, node: "Ingenio infinito", icon: "ui_concentration", note: "Más activaciones de Ingenio para reducir el coste." },
          { pts: 20, node: "Sub-rama de encantamiento elegida", icon: "inv_12_profession_enchanting_elevatingequipment", note: "Elige Arma/Anillo/Pecho o Yelmo/Hombros/Botas." }
        ],
        after: "Las recetas de vendedor y subasta no requieren puntos. Usa Concentración para calidad Oro y no malgastes en ramas que no vendas.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      },
      {
        id: "selling", label: "Vender encantamientos", tag: "Casa de subastas",
        summary: "Producción masiva de una categoría de encantamientos. Elige primero la categoría con más demanda de tu reino.",
        stats: ["inventiva", "ingenio"],
        steps: [
          { pts: 30, node: "Equipo elevado (raíz)", icon: "inv_12_profession_enchanting_elevatingequipment", note: "" },
          { pts: 20, node: "Sub-rama elegida", icon: "ui_profession_enchanting", note: "Thalassiano, amani o haranir." },
          { pts: 20, node: "Destructor de magia (raíz)", icon: "inv_12_profession_enchanting_spellboundshatterer", note: "Inventiva si vendes en plata; usa Fragmentar esencias antes de fabricar." }
        ],
        after: "Para calidad Oro necesitas completar la sub-rama, 3 piezas de equipo azul y habilidad 100. Los encantamientos no se benefician de Fabricación múltiple.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      },
      {
        id: "oils", label: "Aceites y consumibles", tag: "Consumibles",
        summary: "Para vender aceites de maná y consumibles. La guía no trae una configuración cerrada; prioriza la rama de aceites y los atributos que la hoja recomienda.",
        stats: ["multicraft", "ingenio"],
        steps: [
          { pts: null, node: "Transitorios, tónicos y herramientas", icon: "inv_12_profession_enchanting_transitoriestonicsandtools", note: "Sube la rama de aceites de maná y las recetas de consumibles." },
          { pts: 20, node: "Destructor de magia (raíz)", icon: "inv_12_profession_enchanting_spellboundshatterer", note: "Atributos de fabricación para todas las recetas." },
          { pts: null, node: "Fabricación múltiple e Ingenio", icon: "inv_10_engineering2_tinkermodules_color3", note: "La hoja del canal recomienda estos atributos para que los aceites sean rentables." }
        ],
        after: "Para aceites, revisa también la sub-rama de Transitorios, tónicos y herramientas en las capturas de la hoja; la guía de Wow-Professions no separa una configuración de aceites.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      },
      {
        id: "disenchant", label: "Desencantar", tag: "Materiales",
        summary: "Configuración para vender materiales de desencantado. No depende de atributos de fabricación: solo de habilidad y de la sub-rama correcta.",
        stats: [],
        steps: [
          { pts: 30, node: "Delegado de desencantamiento (raíz)", icon: "inv_12_profession_enchanting_disenchantingdelegate", note: "Abre las tres sub-ramas." },
          { pts: 30, node: "Repartidor de polvo, Proveedor de fragmentos o Recolector de cristales", icon: "inv_10_enchanting2_disenchant_color3", note: "Elige según el tipo de objeto que vayas a desencantar." }
        ],
        after: "Con 60 puntos ya produces; luego abre las otras dos sub-ramas. Los atributos de fabricación no afectan al desencantado.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Los encantamientos no se benefician de Fabricación múltiple.",
      "Para desencantar no necesitas herramienta épica: una varita rara + accesorios raros suele bastar."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/enchanting-specializations"
  },

  ingenieria: {
    gid: "64568744",
    objectiveMap: { gear: "prof-gear", components: "recycling" },
    trees: [
      { name: "Movilidad de mercado", focus: "Herramientas y accesorios", desc: "Herramientas de Ingeniería, Sastrería, Joyería, Pesca y Minería." },
      { name: "Análisis de combate", focus: "Equipo de combate", desc: "Gafas, brazales, botas y armas de fuego." },
      { name: "Reciclaje", focus: "Reciclaje y habilidad", desc: "Mejora el reciclaje y da Inventiva, Fabricación múltiple e Ingenio a toda la profesión." },
      { name: "Piezas y robots", focus: "Reactivos y bots", desc: "Robots, aparatos y reactivos; añade activaciones extra al fabricar o reciclar." }
    ],
    builds: [
      {
        id: "prof-gear", label: "Herramientas y accesorios", tag: "Venta de herramientas",
        summary: "Para fabricar equipo de profesión al máximo. La demanda es alta al inicio de expansión y cae después.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 10, node: "Herramientas obligatorias o Últimos retoques", icon: "inv_engineering_90_toolbox_red", note: "Elige primero la rama que quieras vender." },
          { pts: 25, node: "Movilidad de mercado (raíz)", icon: "inv_misc_profession_book_engineering", note: "Habilidad para todo el equipo de profesión." },
          { pts: 30, node: "Reciclaje", icon: "inv_10_engineering_device_gadget1_color1", note: "Gran bonificación de habilidad para todas las recetas." },
          { pts: 30, node: "Sub-rama elegida", icon: "ui_profession_engineering", note: "Calidad Oro sin Concentración con habilidad 100 y equipo azul." }
        ],
        after: "Opcional: 30 en Inventiva si haces pedidos y quieres recuperar materiales. Si no haces pedidos, puedes saltarlo y usar Concentración.",
        source: "https://www.wow-professions.com/midnight/engineering-specialization-guide-and-builds"
      },
      {
        id: "combat", label: "Equipo de combate", tag: "Equipo épico",
        summary: "Para gafas, brazales, botas y armas de fuego. Buena demanda al inicio de temporada.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 25, node: "Análisis de combate (raíz)", icon: "inv_mechagon_blueprints", note: "Abre las cuatro sub-ramas." },
          { pts: 35, node: "Ranura elegida", icon: "ui_profession_engineering", note: "Maximiza una sola ranura antes de abrir otra ranura." },
          { pts: 30, node: "Reciclaje", icon: "inv_10_engineering_device_gadget1_color1", note: "Habilidad para llegar a calidad Oro sin Concentración." }
        ],
        after: "Opcional: 30 en Inventiva. Luego abre las otras ranuras; cada una necesita su propia sub-rama.",
        source: "https://www.wow-professions.com/midnight/engineering-specialization-guide-and-builds"
      },
      {
        id: "recycling", label: "Reciclaje y reactivos", tag: "Producción masiva",
        summary: "Para vender reactivos de calidad Oro reciclando. Es la configuración más rentable si el mercado de materiales está caro.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 30, node: "Reciclaje", icon: "inv_10_engineering_device_gadget1_color1", note: "Empieza por la raíz de reciclaje." },
          { pts: 10, node: "Piezas y robots", icon: "inv_10_engineering_explosives_2_color3", note: "Desbloquea la rama de reactivos." },
          { pts: 20, node: "Inventiva", icon: "inv_10_engineering2_tinkermodules_color3", note: "Ahorra materiales al reciclar." },
          { pts: 20, node: "Piezas y robots", icon: "inv_10_engineering_explosives_2_color3", note: "Más activaciones." },
          { pts: 30, node: "Pedazos", icon: "inv_10_engineering_device_gadget3_color2", note: "Componente de alma de calidad Oro." },
          { pts: 30, node: "Robots", icon: "inv_engineering_triggerpet", note: "Enlace de alma de emergencia de calidad Oro si el mercado lo justifica." }
        ],
        after: "Si solo reciclas, con Inventiva tienes suficiente. Si también fabricas reactivos, añade Fabricación múltiple.",
        source: "https://www.wow-professions.com/midnight/engineering-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Reciclaje es la rama con más habilidad para toda la profesión; casi todas las configuraciones pasan por 30 puntos ahí.",
      "El equipo de profesión se vende muy bien al inicio, pero la demanda cae rápido."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/engineering-specializations"
  },

  inscripcion: {
    gid: "2145631150",
    objectiveMap: { mass: "consumables", milling: "reagents", quality: "consumables" },
    trees: [
      { name: "Planos", focus: "Armas y herramientas", desc: "Bastones, armas de dos manos, arcos y herramientas de Cocina/Alquimia/Inscripción." },
      { name: "Manos relajadas", focus: "Atributos de fabricación", desc: "Fabricación múltiple, Inventiva e Ingenio; enseña el tratado semanal y da un punto extra." },
      { name: "Productos perfeccionados", focus: "Molienda y pergaminos", desc: "Mejora molienda, tintas, cifrados, misivas, contratos y runas vantus." },
      { name: "Curiosidad Luna Negra", focus: "Cartas de la Luna Negra", desc: "Cartas y abalorios de las cuatro familias, además de sigilos." }
    ],
    builds: [
      {
        id: "weapons", label: "Armas y herramientas", tag: "Pedidos de fabricación",
        summary: "Para fabricar armas épicas o herramientas de profesión. Las herramientas se venden muy bien al inicio; las armas tienen demanda más estable.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 15, node: "Planos → Investigación de campo → sub-rama de arma", icon: "inv_10_specialization_inscription_archiving_color2", note: "Elige la sub-rama de arcos, bastones o manos secundarias." },
          { pts: 30, node: "Investigación de campo", icon: "inv_10_specialization_inscription_archiving_color2", note: "Habilidad para todas las armas." },
          { pts: 30, node: "Planos (raíz)", icon: "70_inscription_steamy_romance_novel_kit", note: "" },
          { pts: 30, node: "Sub-rama de arma elegida", icon: "70_inscription_steamy_romance_novel_kit", note: "Calidad Oro con materiales Oro y 3 herramientas raras." }
        ],
        after: "Para herramientas de profesión: 30 en Investigación de mercado (desbloquea las tres), 30 en Planos y 30 en la sub-rama de la herramienta.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      },
      {
        id: "consumables", label: "Misivas y contratos", tag: "Casa de subastas",
        summary: "Producción masiva de misivas, contratos y runas vantus. Las misivas son el mercado más seguro y de mayor volumen.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Manos relajadas (raíz)", icon: "inv_10_specialization_inscription_sharedknowledge_color2", note: "Fabricación múltiple y Inventiva para todo." },
          { pts: 20, node: "Diligencia diestra", icon: "inv_inscription_frog", note: "Fabricación múltiple." },
          { pts: 20, node: "Ojo agudo", icon: "inv_helmet_44", note: "Inventiva." },
          { pts: 30, node: "Productos perfeccionados → Papiro → sub-rama elegida", icon: "inv_10_specialreagentfoozles_primalistrune_fire", note: "Misivas perfectas, Contratos perfectos o Runas vantus perfectas." },
          { pts: 30, node: "Papiro", icon: "inv_10_specialreagentfoozles_primalistrune_fire", note: "" },
          { pts: 30, node: "Productos perfeccionados (raíz)", icon: "inv_7xp_inscription_talenttome01", note: "Cadena completa para calidad Oro." }
        ],
        after: "Si prefieres calidad Oro primero, invierte el orden: sub-rama 30 → Papiro 30 → raíz 30, y luego los atributos.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      },
      {
        id: "reagents", label: "Molienda, tintas y cifrados", tag: "Reactivos",
        summary: "Para vender tintas, cifrados y reactivos. La molienda va primero porque los pigmentos Oro son la base de las tintas Oro.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Manos relajadas (raíz)", icon: "inv_10_specialization_inscription_sharedknowledge_color2", note: "" },
          { pts: 20, node: "Diligencia diestra", icon: "inv_inscription_frog", note: "Fabricación múltiple." },
          { pts: 20, node: "Ojo agudo", icon: "inv_helmet_44", note: "Inventiva." },
          { pts: 30, node: "Molienda perfecta", icon: "inv_12_profession_inscriptions_pigment_darkorange", note: "Pigmentos de calidad Oro." },
          { pts: 30, node: "Procesamiento", icon: "70_inscription_pigment_sallow", note: "" },
          { pts: 30, node: "Productos perfeccionados (raíz)", icon: "inv_7xp_inscription_talenttome01", note: "" },
          { pts: 30, node: "Tintas perfectas", icon: "inv_12_profession_inscriptions_ink_darkorange", note: "Tintas para todas las recetas." },
          { pts: 30, node: "Claves perfectas", icon: "inv_10_specialreagentfoozles_primalistrune_fire", note: "Opcional; el mercado de cifrados es más pequeño." }
        ],
        after: "Puedes combinar esta configuración con la de misivas/contratos cuando termines la cadena de molienda.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      },
      {
        id: "darkmoon", label: "Cartas de la Luna Negra", tag: "Luna Negra",
        summary: "Especialización de cartas y abalorios. Espera datos de mercado antes de invertir fuerte: depende de qué familia sea la mejor.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 20, node: "Curiosidad Luna Negra (raíz)", icon: "inv_darkmoon_eye", note: "Habilidad para todas las cartas." },
          { pts: 20, node: "Familia elegida (Podredumbre, Sangre, Caza o Vacío)", icon: "inv_darkmoon_eye", note: "Aprendes a inscribir y transcribir." },
          { pts: 20, node: "Dominio de la Luna Negra o Sigilo de la Luna Negra", icon: "inv_darkmoon_eye", note: "Abalorio o embellecimiento; elige según demanda." }
        ],
        after: "60 puntos para calidad Oro. Después puedes abrir otra familia, el otro nodo o Manos relajadas.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Los contratos están limitados a uno por banda de guerra y semana; las misivas tienen mucho más volumen.",
      "Las runas vantus solo tienen demanda cuando abre la banda."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/inscription-specializations"
  },

  joyeria: {
    gid: "1417343130",
    objectiveMap: { gems: "gems", prospecting: "prospecting", quality: "gems" },
    trees: [
      { name: "Producción consciente", focus: "Atributos de fabricación", desc: "Fabricación múltiple, Inventiva e Ingenio para todas las recetas de Joyería." },
      { name: "Gemas glamorosas", focus: "Gemas", desc: "Corte de los cuatro colores; sub-ramas para gemas impecables y prismas." },
      { name: "Accesorios atractivos", focus: "Anillos y collares", desc: "Anillos, collares y accesorios de profesión para Joyería, Encantamiento e Inscripción." },
      { name: "Procesador proficiente", focus: "Prospectar y triturar", desc: "Reactivos comerciables, prospectado de mena y trituración de gemas." }
    ],
    builds: [
      {
        id: "gems", label: "Gemas", tag: "Casa de subastas",
        summary: "Vende gemas por color. Elige primero el color que cubra más demanda según las guías de equipo óptimo por clase.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 5, node: "Producción consciente → Producción descabellada", icon: "inv_10_jewelcrafting_gem3primal_uncut_blue", note: "Desbloquea Fabricación múltiple." },
          { pts: 30, node: "Producción descabellada", icon: "inv_10_jewelcrafting_gem3primal_uncut_blue", note: "Máxima Fabricación múltiple." },
          { pts: 25, node: "Sub-rama del color elegido", icon: "inv_12_profession_jewelcrafting_glamorous_gems", note: "Desbloquea las tres recetas de gema." },
          { pts: 30, node: "Gemas glamorosas (raíz)", icon: "inv_12_profession_jewelcrafting_glamorous_gems", note: "" },
          { pts: 15, node: "Gema elegida", icon: "inv_12_profession_jewelcrafting_glamorous_gems", note: "Calidad Oro sin Concentración." }
        ],
        after: "Si prefieres Inventiva primero: 10 en Producción consciente y 30 en Ahorros prácticos, luego la sub-rama del color.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      },
      {
        id: "jewelry", label: "Anillos y collares", tag: "Pedidos de fabricación",
        summary: "Para anillos, collares y accesorios de profesión. Anillos y collares son la apuesta más segura.",
        stats: ["inventiva"],
        steps: [
          { pts: 30, node: "Accesorios atractivos (raíz)", icon: "inv_12_profession_jewelcrafting_alluring_accessories", note: "" },
          { pts: 40, node: "Sub-rama elegida", icon: "ui_profession_jewelcrafting", note: "Anillos, Collares o Accesorios de profesión." },
          { pts: 30, node: "Ahorros prácticos", icon: "inv_misc_generic_craftingreagent01", note: "Inventiva; las joyas no pueden usar Fabricación múltiple." }
        ],
        after: "Si quieres una segunda categoría, añade 40 puntos a otra sub-rama. La raíz ya está maximizada.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      },
      {
        id: "reagents", label: "Reactivos", tag: "Casa de subastas",
        summary: "Para vender viales, lentes y reactivos. Fabricación múltiple para volumen; Inventiva para margen.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 5, node: "Producción consciente → Producción descabellada", icon: "inv_10_jewelcrafting_gem3primal_uncut_blue", note: "" },
          { pts: 30, node: "Producción descabellada", icon: "inv_10_jewelcrafting_gem3primal_uncut_blue", note: "Máxima Fabricación múltiple." },
          { pts: 10, node: "Producción consciente", icon: "inv_12_profession_jewelcrafting_thoughtful_throughput", note: "" },
          { pts: 30, node: "Ahorros prácticos", icon: "inv_misc_generic_craftingreagent01", note: "Inventiva." }
        ],
        after: "Para calidad Oro: 15 en Procesador proficiente, 30 en Manufacturero de materiales y 30 en Reactivos básicos u opcionales.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      },
      {
        id: "prospecting", label: "Prospectar y triturar", tag: "Procesamiento",
        summary: "Para vender gemas y polvo de gemas. Prospectar mena y triturar gemas alimenta a todos los joyeros.",
        stats: ["inventiva"],
        steps: [
          { pts: 10, node: "Procesador proficiente", icon: "inv_12_profession_jewelcrafting_proficient_processor", note: "" },
          { pts: 30, node: "Profesional de la prospección", icon: "inv_misc_gem_bloodgem_01", note: "El último punto da gemas extra." },
          { pts: 1, node: "Cada tipo de mena", icon: "inv_misc_gem_bloodgem_01", note: "Deja torio deslumbrante para más adelante." },
          { pts: 5, node: "Producción consciente", icon: "inv_12_profession_jewelcrafting_thoughtful_throughput", note: "" },
          { pts: 30, node: "Ahorros prácticos", icon: "inv_misc_generic_craftingreagent01", note: "Inventiva." },
          { pts: 20, node: "Procesador proficiente", icon: "inv_12_profession_jewelcrafting_proficient_processor", note: "Calidad Oro al prospectar." }
        ],
        after: "Para triturar: 10 en Procesador proficiente, 40 en Conocedor de triturado y 20 más en Procesador proficiente.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Las joyas no se benefician de Fabricación múltiple; para anillos y collares, Inventiva es el atributo clave.",
      "Para gemas y reactivos, Fabricación múltiple suele ser mejor."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/jewelcrafting-specializations"
  },

  peleteria: {
    gid: "70446512",
    objectiveMap: { gear: "standard", materials: "auction" },
    trees: [
      { name: "Maestría en peletería", focus: "Atributos de fabricación", desc: "Fabricación múltiple, Inventiva e Ingenio para toda la profesión." },
      { name: "Cuero duradero", focus: "Armadura de cuero", desc: "Recetas de cuero para las 8 piezas; desbloquea el conjunto épico de Lunargenta." },
      { name: "Escamas protectoras", focus: "Armadura de malla", desc: "Recetas de malla para las 8 piezas; desbloquea el conjunto épico de malla." },
      { name: "Fortaleza perfecta", focus: "Consumibles y herramientas", desc: "Conjuntos de armadura, herramientas de profesión, accesorios y reactivos opcionales." }
    ],
    builds: [
      {
        id: "standard", label: "Equipo de cuero o malla", tag: "Armadura",
        summary: "La configuración más segura para ser autosuficiente con una armadura. Cuero duradero y Escamas protectoras tienen la misma estructura.",
        stats: ["inventiva", "multicraft", "ingenio"],
        steps: [
          { pts: 30, node: "Raíz de Cuero duradero o Escamas protectoras", icon: "inv_12_profession_leatherworking_leatherworking_specializations_lastingleather", note: "Elige cuero o malla." },
          { pts: 30, node: "Lado izquierdo o derecho", icon: "inv_12_profession_leatherworking_leatherworking_specializations_lastingleather", note: "Izquierda: cabeza/pecho/hombros/muñecas. Derecha: piernas/manos/cintura/pies." },
          { pts: 30, node: "El otro lado", icon: "inv_12_profession_leatherworking_leatherworking_specializations_lastingleather", note: "Desbloquea las 4 recetas restantes." }
        ],
        after: "Después puedes abrir la otra armadura (cuero ↔ malla) o invertir en Maestría en peletería para atributos.",
        source: "https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds"
      },
      {
        id: "orders", label: "Pedidos de fabricación", tag: "Chat de comercio",
        summary: "Para llenar pedidos de una ranura concreta. Necesitas unos 60 puntos para abrir la armadura y 20 por ranura.",
        stats: ["inventiva", "ingenio"],
        steps: [
          { pts: 30, node: "Raíz de la armadura", icon: "inv_12_profession_leatherworking_leatherworking_specializations_lastingleather", note: "" },
          { pts: 30, node: "Sub-rama de la ranura", icon: "ui_profession_leatherworking", note: "Elige el lado que contiene la ranura que quieres." },
          { pts: 20, node: "Nodo de la ranura concreta", icon: "inv_12_profession_leatherworking_leatherworking_specializations_lastingleather", note: "Ej.: Muñeca, Yelmo, Pecho." }
        ],
        after: "Alternativa de equipo de profesión: 30 en la raíz de Fortaleza perfecta + 30 en el siguiente nodo; cubre todas las herramientas.",
        source: "https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds"
      },
      {
        id: "auction", label: "Consumibles y reactivos", tag: "Casa de subastas",
        summary: "Para vender conjuntos de armadura, reactivos y materiales intermedios en masa.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Fortaleza perfecta → Acopio apacible → Consumibles cruciales", icon: "inv_12_profession_leatherworking_thalassian_amor_kit", note: "Desbloquea conjuntos de armadura y tambores." },
          { pts: 5, node: "Maestría en peletería (raíz)", icon: "inv_12_profession_leatherworking_leatherworking_specializations_learnedleatherworker-", note: "" },
          { pts: 30, node: "Dominio de fabricación múltiple", icon: "inv_leatherworking_modifiedcraftingreagent_magenta", note: "Fabricación múltiple para consumibles." },
          { pts: 10, node: "Maestría en peletería", icon: "inv_12_profession_leatherworking_leatherworking_specializations_learnedleatherworker-", note: "Desbloquea la segunda sub-rama." },
          { pts: 30, node: "Desperdicios reducidos", icon: "inv_10_specialization_leatherworking_shearmasteryofleather_color1", note: "Inventiva." }
        ],
        after: "Para Básicos rebosantes (reactivos) u Opcionales abrumadores, cambia la sub-rama de Fortaleza perfecta y vuelve a llenar la cadena.",
        source: "https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Las dos ramas de armadura son idénticas en estructura; elige según el tipo de equipo que uses o pidan.",
      "El equipo de profesión es una inversión única de ~60 puntos para todas las herramientas."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/leatherworking-specializations"
  },

  sastreria: {
    gid: "19777938",
    objectiveMap: { gear: "armor", materials: "bolt", bags: "standard" },
    trees: [
      { name: "Galas sin'dorei", focus: "Armaduras de tela", desc: "Recetas de armadura para las 9 ranuras; los nodos por ranura desbloquean las recetas épicas." },
      { name: "Costura veloz", focus: "Madejas y embellecimientos", desc: "Reutilización diaria de tejido arcano y seda de fuego solar, y equipo con embellecimientos." },
      { name: "Especialista en telas", focus: "Recolectar tela", desc: "Aumenta la cantidad y calidad de tela en Harandar/Tormenta del Vacío y Canción Eterna/Zul'Aman." },
      { name: "Arte de las fibras", focus: "Atributos y habilidad", desc: "Habilidad, Fabricación múltiple, Inventiva y reducción de Concentración para toda la profesión." }
    ],
    builds: [
      {
        id: "armor", label: "Armaduras y pedidos", tag: "Pedidos de fabricación",
        summary: "Para fabricar equipo de tela y llenar pedidos. Maximiza una ranura antes de abrir otra y añade Arte de las fibras para habilidad global.",
        stats: ["multicraft", "inventiva", "ingenio"],
        steps: [
          { pts: 5, node: "Galas sin'dorei (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_sindoreifinery", note: "Desbloquea una sub-rama." },
          { pts: 10, node: "Sub-rama de la ranura elegida", icon: "ui_profession_tailoring", note: "Desbloquea la primera receta de la ranura." },
          { pts: 30, node: "Sub-rama del medio", icon: "ui_profession_tailoring", note: "Habilidad y atributos para la ranura." },
          { pts: 30, node: "Galas sin'dorei (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_sindoreifinery", note: "" },
          { pts: 30, node: "Arte de las fibras (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_nimbleneedlework", note: "Habilidad para todas las recetas; hazlo antes de maximizar ranuras." }
        ],
        after: "Luego 30 en cada una de las otras dos sub-ramas para abrir todas las ranuras. Para calidad Oro sin Concentración necesitarás muchos puntos ocultos en Arte de las fibras/Especialista en telas.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      },
      {
        id: "bolt", label: "Madejas y embellecimientos", tag: "Reutilización diaria",
        summary: "Para producir tejido arcano/seda de fuego solar y equipo con embellecimientos. Ideal para un ejército de personajes o venta constante.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 20, node: "Costura veloz (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_fiberarts", note: "Desbloquea ambas reutilizaciones de madejas." },
          { pts: 15, node: "Segundo nodo de la rama elegida", icon: "ui_profession_tailoring", note: "Tejido arcano o seda de fuego solar; desbloquea la última sub-rama." },
          { pts: 20, node: "Última sub-rama", icon: "ui_profession_tailoring", note: "Reduce la reutilización de ~17 h a ~8 h 30 min." },
          { pts: 30, node: "Eficiencia creativa (Arte de las fibras)", icon: "inv_misc_1h_tailoringbloodelf_b_01", note: "Fabricación múltiple para todas las fabricaciones." },
          { pts: 10, node: "Arte de las fibras (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_nimbleneedlework", note: "" },
          { pts: 30, node: "Aprovechamiento textil", icon: "inv_12_profession_tailoring_rareclothbolt_purple", note: "Inventiva." }
        ],
        after: "Añade 15 en Especialista en telas y 25 en la sub-rama derecha para Fabricación múltiple oculta; ayuda a llegar a madejas de calidad Oro sin Concentración.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      },
      {
        id: "farming", label: "Recolectar tela", tag: "Mundo abierto",
        summary: "Para quien pasa mucho tiempo en mundo abierto, mazmorras o excursiones. Aumenta la tela y su calidad.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 30, node: "Especialista en telas (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_fabricspecialist", note: "Abre las dos sub-ramas de zonas." },
          { pts: 20, node: "Costura veloz (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_fiberarts", note: "Los enemigos empiezan a soltar tejido arcano y seda de fuego solar." },
          { pts: 25, node: "Telas exóticas o Tela de los Reinos del Este", icon: "inv_12_tailoring_rare_cloth_violet_rare-cloth", note: "Harandar/Tormenta del Vacío o Canción Eterna/Zul'Aman." }
        ],
        after: "Solo el último punto (25) da el aumento de calidad; mientras llenas la sub-rama no esperes más gotas. Los enemigos de M+ no sueltan tela.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      },
      {
        id: "standard", label: "Configuración estándar / diarias", tag: "Versátil",
        summary: "Configuración versátil para empezar: reutilizaciones diarias y equipo con embellecimientos, sin comprometerte con una sola rama.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 20, node: "Costura veloz (raíz)", icon: "inv_12_profession_tailoring_tailoringspecializations_fiberarts", note: "Desbloquea las dos reutilizaciones." },
          { pts: 15, node: "Segundo nodo de la rama elegida", icon: "ui_profession_tailoring", note: "Tejido arcano o seda de fuego solar." },
          { pts: 20, node: "Última sub-rama", icon: "ui_profession_tailoring", note: "Reutilización reducida y receta de brazales épicos." }
        ],
        after: "Después elige Fabricación de madejas para atributos, Recolectar tela o Armadura para pedidos. Para mochilas no hay rama específica; la configuración estándar y Arte de las fibras son suficientes.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Sastrería necesita muchos más puntos que otras profesiones para alcanzar calidad Oro sin Concentración.",
      "Las bolsas no se benefician de Fabricación múltiple ni Ingenio; no gastes puntos específicos en ellas."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/tailoring-specializations"
  },

  herboristeria: {
    gid: "2028290667",
    objectiveMap: { general: "druid", rare: "druid", fast: "druid" },
    trees: [
      { name: "Cosechas abundantes", focus: "Rendimiento", desc: "Aumenta el mínimo y máximo de hierbas; sub-ramas por tipo de hierba y Loto nocturno." },
      { name: "Botánica", focus: "Recolección montada", desc: "40 puntos permiten recolectar montado; mejora Destreza, Percepción y Delicadeza." },
      { name: "Sobrecarga de Midnight", focus: "Sobrecarga y motas", desc: "Especialización en nodos infundidos y en el recolección de motas." }
    ],
    builds: [
      {
        id: "druid", label: "Con druida / recolección general", tag: "Druida",
        summary: "Si usas druida ya puedes recolectar montado; invierte directo en rendimiento y luego en las hierbas que recolectes.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Cosechas abundantes (raíz)", icon: "inv_12_profession_herbalism_herbalismspecializations_bountifulharvests", note: "+1 mínimo y máximo de hierbas, y habilidad para todas." },
          { pts: 30, node: "Sub-rama de la hierba principal", icon: "inv_12_profession_herbalism_herbalismspecializations_bountifulharvests", note: "Protoflorador, Trituraespinas, Hurgarraíces, Procurador de plata o Montero de lirios." }
        ],
        after: "Si buscas Loto nocturno, maximiza la sub-rama de la hierba que recolectes: el último punto aumenta la probabilidad de encontrarlo.",
        source: "https://www.wow-professions.com/midnight/herbalism-specialization-guide-and-builds"
      },
      {
        id: "non-druid", label: "Sin druida / montado", tag: "Montado",
        summary: "Para cualquier clase que no sea druida: primero desbloquea la recolección montada y luego el rendimiento.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Botánica (raíz)", icon: "inv_12_profession_herbalism_herbalismspecializations_botany", note: "Recolectar montado; también da Destreza, Percepción y Delicadeza." },
          { pts: 40, node: "Cosechas abundantes (raíz)", icon: "inv_12_profession_herbalism_herbalismspecializations_bountifulharvests", note: "Rendimiento y habilidad." },
          { pts: 30, node: "Sub-rama de la hierba principal", icon: "inv_12_profession_herbalism_herbalismspecializations_bountifulharvests", note: "Elige según lo que recolectes." }
        ],
        after: "No sientas que gastas puntos de más en Botánica: también necesitas sus atributos y la comodidad de recolectar montado.",
        source: "https://www.wow-professions.com/midnight/herbalism-specialization-guide-and-builds"
      },
      {
        id: "overload", label: "Sobrecarga y motas", tag: "Infundido",
        summary: "Para recolectar motas y aprovechar los nodos infundidos. Abre las sub-ramas aunque no las maximices de inmediato.",
        stats: ["destreza", "percepcion"],
        steps: [
          { pts: 40, node: "Botánica (raíz)", icon: "inv_12_profession_herbalism_herbalismspecializations_botany", note: "Solo si no eres druida; te permite recolectar montado." },
          { pts: 40, node: "Sobrecarga de Midnight (raíz)", icon: "inv_12_profession_herbalism_herbalismspecializations_midnightoverload", note: "Mejora la sobrecarga de nodos infundidos." },
          { pts: 20, node: "Sub-ramas Fundiluz, Salvaje, Primigenio y Unido al Vacío", icon: "inv_12_profession_thematicfoozles_moteofpurelight_gold", note: "Abrirlas reduce desventajas y mejora las motas." }
        ],
        after: "La hoja del canal prioriza Destreza para recolección masiva; Percepción es la segunda y Delicadeza se usa menos porque los materiales comunes valen poco.",
        source: "https://www.wow-professions.com/midnight/herbalism-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Druida es la mejor opción para recolectar: recoge montado por defecto y usa vuelo instantáneo.",
      "La hoja del canal recomienda Destreza como atributo principal; Percepción para materiales raros.",
      "El Aguardiente de la Luna Negra es un consumible clave según la hoja."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/herbalism-overview-trainer-locations-treasures-tools"
  },

  mineria: {
    gid: "1060061825",
    objectiveMap: { general: "general", rare: "general", fast: "general" },
    trees: [
      { name: "Minería meticulosa", focus: "Recolección montada", desc: "40 puntos permiten minar montado y mejoran Delicadeza, Destreza, Percepción y Habilidad." },
      { name: "Menas abundantes", focus: "Rendimiento y habilidad", desc: "Habilidad para todas las menas; sub-ramas por tipo de mena y torio deslumbrante." },
      { name: "Megafilón", focus: "Sobrecarga y motas", desc: "Especialización en nodos infundidos y en el recolección de motas." }
    ],
    builds: [
      {
        id: "general", label: "Recolección general", tag: "Montado",
        summary: "La configuración base para cualquier minero: montado primero, habilidad después y sub-ramas de las menas más abundantes.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Minería meticulosa (raíz)", icon: "inv_12_profession_mining_miningspecializations_meticulousmining", note: "Minar montado; funciona incluso sin druida." },
          { pts: 50, node: "Menas abundantes (raíz)", icon: "inv_12_profession_mining_miningspecializations_plentifulores", note: "+20 habilidad para todas las menas." },
          { pts: 40, node: "Plata brillante y Cobre refulgente", icon: "inv_ore_brilliantsilver", note: "Prioriza estas sub-ramas; Estaño umbrío al final." }
        ],
        after: "Las tres menas aparecen en todas las zonas; no necesitas cambiar de configuración por zona.",
        source: "https://www.wow-professions.com/midnight/mining-specialization-guide-and-builds"
      },
      {
        id: "rich", label: "Depósitos abundantes y vetas", tag: "Depósitos abundantes",
        summary: "Para maximizar el rendimiento de depósitos ricos. Los depósitos abundantes son más útiles que las vetas porque hay muchas menos.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Minería meticulosa (raíz)", icon: "inv_12_profession_mining_miningspecializations_meticulousmining", note: "" },
          { pts: 50, node: "Menas abundantes (raíz)", icon: "inv_12_profession_mining_miningspecializations_plentifulores", note: "" },
          { pts: 35, node: "Depósitos abundantes", icon: "inv_10_tracking_mining", note: "Habilidad, Delicadeza, Destreza y Percepción para depósitos abundantes." }
        ],
        after: "Las vetas déjalas para el final: hay pocas y el beneficio es menor.",
        source: "https://www.wow-professions.com/midnight/mining-specialization-guide-and-builds"
      },
      {
        id: "overload", label: "Sobrecarga y motas", tag: "Infundido",
        summary: "Para recolectar motas y aprovechar los nodos infundidos. Abre las sub-ramas para reducir riesgos.",
        stats: ["destreza", "percepcion"],
        steps: [
          { pts: 40, node: "Minería meticulosa (raíz)", icon: "inv_12_profession_mining_miningspecializations_meticulousmining", note: "" },
          { pts: 50, node: "Menas abundantes (raíz)", icon: "inv_12_profession_mining_miningspecializations_plentifulores", note: "" },
          { pts: 20, node: "Megafilón (raíz)", icon: "inv_12_profession_mining_miningspecializations_overloded", note: "Mejora la sobrecarga." },
          { pts: 20, node: "Fundiluz, Salvaje, Primigenio y Unido al Vacío", icon: "inv_12_profession_thematicfoozles_moteofpurelight_gold", note: "Abre las sub-ramas; luego maximiza la que corresponda a tu recolección." }
        ],
        after: "La hoja prioriza Destreza; Percepción ayuda con torio deslumbrante y materiales raros.",
        source: "https://www.wow-professions.com/midnight/mining-specialization-guide-and-builds"
      }
    ],
    notes: [
      "No hay diferencia de menas por zona: Plata brillante, Cobre refulgente y Estaño umbrío aparecen en todas.",
      "La hoja del canal prioriza Destreza; Percepción para torio deslumbrante y raros."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/mining-overview-trainer-locations-ores-tools"
  },

  desuello: {
    gid: "391408451",
    objectiveMap: { general: "general", rare: "rares", fast: "general" },
    trees: [
      { name: "Curtido completo", focus: "Base y Afilar tu cuchillo", desc: "Árbol base: garantiza una piel o escama con Afilar tu cuchillo y da cargas extra." },
      { name: "Recolección lucrativa", focus: "Materiales específicos", desc: "Carne, materiales por especie, Percepción y difusores para motas." },
      { name: "Rastreador talentoso", focus: "Bestias majestuosas", desc: "Señuelos, bestias de renombre y materiales majestuosos; la rama de recolección de raros." }
    ],
    builds: [
      {
        id: "general", label: "Recolección general", tag: "Desuello",
        summary: "La base para cualquier desuellador: Afilar tu cuchillo con 3 cargas, habilidad y Percepción para materiales raros.",
        stats: ["percepcion", "destreza", "delicadeza"],
        steps: [
          { pts: 40, node: "Curtido completo (raíz)", icon: "inv_12_profession_skinning_skinningspecializations_thoroughtanning", note: "Afilar tu cuchillo y tercera carga a 40." },
          { pts: 20, node: "Cuero duradero o Escamas magníficas", icon: "inv_12_profession_skinning_thalassianleather_brown", note: "Elige cuero o escamas según lo que necesites." },
          { pts: 40, node: "Sub-rama elegida", icon: "ui_profession_skinning", note: "Habilidad y Percepción para ese tipo de bestia." },
          { pts: 35, node: "Recolección lucrativa (raíz) → Ganador de trofeos", icon: "inv_12_profession_skinning_animalparts_horn", note: "Percepción para materiales raros; no pases de 35 en Recolección lucrativa." }
        ],
        after: "No inviertas más de 35 en Recolección lucrativa: Estómago radiante no compensa. Luego puedes abrir Rastreador talentoso.",
        source: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
      },
      {
        id: "rares", label: "Pieles raras / majestuosas", tag: "Bestias de renombre",
        summary: "Para cazar bestias majestuosas y recolectar materiales majestuosos (garras, pelajes y aletas). Necesitas señuelos y Percepción.",
        stats: ["percepcion", "destreza"],
        steps: [
          { pts: 40, node: "Curtido completo (raíz)", icon: "inv_12_profession_skinning_skinningspecializations_thoroughtanning", note: "" },
          { pts: 40, node: "Rastreador talentoso (raíz)", icon: "inv_12_profession_skinning_skinningspecializations_talentedtracking", note: "Aprende señuelos y desbloquea Señuelo de bestia majestuosa." },
          { pts: 20, node: "Materiales majestuosos o Recolector de componentes", icon: "inv_12_skinning_stormchargedleather1", note: "Materiales majestuosos para raros; Recolector de componentes para volumen de cuero/escamas." }
        ],
        after: "Usa los señuelos en las zonas correctas y con Sexto sentido activo. Percepción alta para materiales majestuosos.",
        source: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
      },
      {
        id: "alt-army", label: "Varios personajes", tag: "Varios personajes",
        summary: "Configuración mínima para varios personajes: Afilar tu cuchillo, habilidad y Percepción. No necesitas más puntos para que sea rentable.",
        stats: ["percepcion", "destreza", "delicadeza"],
        steps: [
          { pts: 40, node: "Curtido completo (raíz)", icon: "inv_12_profession_skinning_skinningspecializations_thoroughtanning", note: "" },
          { pts: 40, node: "Cuero duradero o Escamas magníficas", icon: "inv_12_profession_skinning_thalassianleather_brown", note: "" },
          { pts: 35, node: "Recolección lucrativa (raíz)", icon: "inv_12_profession_skinning_skinningspecializations_gainfulgathering", note: "Detente en 35." }
        ],
        after: "Con esto basta para varios personajes; los atributos del equipo importan menos que la cantidad de personajes.",
        source: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
      }
    ],
    notes: [
      "Wowhead prioriza Percepción por las bestias de alto valor; la hoja del canal prioriza Destreza para recolección masiva.",
      "Afilar tu cuchillo garantiza una piel o escama en el siguiente desuello; usa las cargas en bestias raras."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
  },

  cocina: {
    gid: "559133695",
    trees: [],
    builds: [],
    emptyNote: "Cocina no tiene árbol de especialización en Midnight. Su progresión depende de recetas, habilidad y conocimiento, no de puntos de especialización.",
    notes: ["Revisa la pestaña de Cocina y Pesca de la hoja para recetas y notas."],
    guide: "https://www.wowhead.com/guide/midnight/professions"
  },

  pesca: {
    gid: "559133695",
    trees: [],
    builds: [],
    emptyNote: "Pesca no tiene árbol de especialización en Midnight. Su progresión depende de habilidad, recetas y conocimiento, no de puntos de especialización.",
    notes: ["Revisa la pestaña de Cocina y Pesca de la hoja para recetas y notas."],
    guide: "https://www.wowhead.com/guide/midnight/professions"
  }
};
