"use strict";

window.WOW_SPECS = {
  sheetUrl: "https://docs.google.com/spreadsheets/d/1kKJyJ_sHOh2pIMTDjI2c1wIKFeRj2f_S/edit",
  note: "Los nombres de los árboles se mantienen en inglés para que coincidan con las capturas y las guías. Cocina y Pesca no tienen árbol de especialización en Midnight.",

  alquimia: {
    gid: "100445853",
    objectiveMap: { mass: "flasks", quality: "flasks" },
    trees: [
      { name: "Potion Prowess", focus: "Pociones", desc: "Pociones Void y Light; desbloquea el caldero de pociones con 30 puntos." },
      { name: "Fluent in Flasks", focus: "Frascos y phials", desc: "Frascos, phials y duración pasiva; caldero de frascos con 30 puntos." },
      { name: "Transmutation Authority", focus: "Transmutaciones", desc: "Motes, conversiones de materiales, Wondrous Synergist y Alchemist Stone." },
      { name: "Alchemical Mastery", focus: "Stats de crafteo", desc: "Mejora Multicraft, Resourcefulness e Ingenuity para toda la profesión." }
    ],
    builds: [
      {
        id: "flasks", label: "Vender frascos", tag: "Auction House",
        summary: "La línea de mayor demanda para raid y M+. Empieza por Multicraft y añade Resourcefulness para mejorar el margen.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Fluent in Flasks (raíz)", note: "Desbloquea la rama de frascos." },
          { pts: 10, node: "Sin'dorei Specialist", note: "" },
          { pts: 20, node: "Flask Abundance", note: "Máximo Multicraft para frascos." },
          { pts: 10, node: "Alchemical Mastery (raíz)", note: "" },
          { pts: 20, node: "Recycle", note: "Resourcefulness para gastar menos materiales." },
          { pts: 20, node: "Fluent in Flasks (30 total)", note: "Desbloquea el caldero de frascos Sin'dorei." },
          { pts: 20, node: "Sin'dorei Specialist", note: "Completa la rama." },
          { pts: 20, node: "Alchemical Mastery", note: "Completa los stats." }
        ],
        after: "Si juegas raid o M+, empieza con 15 puntos en Fluent in Flasks para la duración y después sigue esta build.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      },
      {
        id: "phials", label: "Vender phials", tag: "Auction House",
        summary: "Mercado más pequeño que los frascos, pero con menos competencia. La ruta es casi idéntica, cambiando Sin'dorei Specialist por Haranir Secrets.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Fluent in Flasks (raíz)", note: "" },
          { pts: 10, node: "Haranir Secrets", note: "" },
          { pts: 20, node: "Phial Abundance", note: "Máximo Multicraft para phials." },
          { pts: 10, node: "Alchemical Mastery (raíz)", note: "" },
          { pts: 20, node: "Recycle", note: "Resourcefulness." },
          { pts: 20, node: "Fluent in Flasks (30 total)", note: "Desbloquea el caldero." },
          { pts: 20, node: "Haranir Secrets", note: "Completa la rama." },
          { pts: 20, node: "Alchemical Mastery", note: "Completa los stats." }
        ],
        after: "Si el mercado de phials está flojo, cambia a frascos o pociones; la estructura de puntos es la misma.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      },
      {
        id: "potions", label: "Vender pociones", tag: "Auction House",
        summary: "Elige Void o Light y maxa Multicraft antes de buscar calidad Oro. Buena demanda, pero más competencia que frascos.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Potion Prowess (raíz)", note: "Abre las sub-ramas Void y Light." },
          { pts: 10, node: "Path of Void o Path of Light", note: "Elige una sola rama." },
          { pts: 20, node: "Prolific Potioneer (Void o Light)", note: "Máximo Multicraft." },
          { pts: 10, node: "Alchemical Mastery (raíz)", note: "" },
          { pts: 20, node: "Reuse", note: "Resourcefulness para pociones." },
          { pts: 30, node: "Potion Prowess (total)", note: "Desbloquea el caldero Voidlight." },
          { pts: 30, node: "Path of Void o Light", note: "Completa la rama elegida." },
          { pts: 30, node: "Alchemical Mastery", note: "Completa los stats." }
        ],
        after: "Para una segunda línea de producto, replica la build en la otra rama (Void/Light) o cambia a frascos.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      },
      {
        id: "transmutes", label: "Transmutaciones y diarias", tag: "Daily CDs",
        summary: "La build de oro pasivo: reduce el cooldown de Wondrous Synergist y luego añade Resourcefulness.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Transmutation Authority (raíz)", note: "Desbloquea Metamorphic Mastery y Synthesis Synergy." },
          { pts: 20, node: "Metamorphic Mastery", note: "Multicraft para transmutaciones de motes." },
          { pts: 20, node: "Synthesis Synergy", note: "Baja el cooldown de Wondrous Synergist de ~18 h a ~9 h." },
          { pts: 10, node: "Alchemical Mastery (raíz)", note: "" },
          { pts: 20, node: "Reduce", note: "Resourcefulness para todas las transmutaciones." }
        ],
        after: "Si buscas calidad Oro, añade 20 puntos a la raíz de Transmutation Authority y maximiza Alchemical Mastery. Las transmutaciones de materiales no pueden Multicraft.",
        source: "https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Regla rápida: si la receta puede Multicraft, usa Multicraft; si no, usa Resourcefulness.",
      "Las transmutaciones de materiales no se benefician de Multicraft; las de motes y Wondrous Synergist sí."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/alchemy-specializations"
  },

  herreria: {
    gid: "1370887411",
    objectiveMap: { gear: "standard", consumables: "auction" },
    trees: [
      { name: "Craftsmithing", focus: "Herramientas de profesión", desc: "Herramientas para otros crafteadores y Tool Stones que dan stats temporales." },
      { name: "The Old Ways", focus: "Stats y aleaciones", desc: "Multicraft, Resourcefulness e Ingenuity para toda la profesión; rama de aleaciones." },
      { name: "Armorsmithing", focus: "Armaduras de placas", desc: "Las 9 piezas de armadura: cabeza, pecho, piernas, hombros, manos, cintura, muñecas, pies y escudos." },
      { name: "Weaponsmithing", focus: "Armas", desc: "Espadas, hachas, mazas, dagas, armas de asta y guadañas; incluye Weaponstones." }
    ],
    builds: [
      {
        id: "standard", label: "Equipo propio", tag: "Armadura o armas",
        summary: "La opción más segura si quieres ser autosuficiente y craftear tu equipo de temporada.",
        stats: ["inventiva", "multicraft", "ingenio"],
        steps: [
          { pts: 30, node: "Armorsmithing o Weaponsmithing (raíz)", note: "Elige armadura o armas antes de invertir." },
          { pts: 30, node: "Sub-rama del slot elegido", note: "Armadura: Waist/Wrists/Hands, Head/Shoulder/Feet o Chest/Legs/Shield. Armas: Hafted o Blades." },
          { pts: 20, node: "Nodo del ítem concreto", note: "Maxa un solo slot antes de abrir otro." }
        ],
        after: "Después maxa los otros slots de la misma rama o pasa a la otra especialidad. No repartas puntos entre todas las ramas al inicio.",
        source: "https://www.wow-professions.com/midnight/blacksmithing-specialization-guide-and-builds"
      },
      {
        id: "orders", label: "Pedidos de fabricación", tag: "Trade Chat",
        summary: "Para llenar pedidos de armadura o armas. Necesitas especializarte en un slot para llegar a rango máximo sin Concentration.",
        stats: ["inventiva", "ingenio"],
        steps: [
          { pts: 30, node: "Raíz de Armorsmithing o Weaponsmithing", note: "" },
          { pts: 30, node: "Sub-rama del slot", note: "Ej.: Sculpted Armor, Large Plate Armor, Hafted o Blades." },
          { pts: 20, node: "Nodo del ítem concreto", note: "Ej.: Helm, Greataxe, Wrist." }
        ],
        after: "Si el volumen de pedidos es bajo, invierte en Resourceful Smith (The Old Ways) para recuperar materiales. La alternativa de herramientas de profesión es 30 en Craftsmithing + 25 en Trade Tools/Trade Accessories.",
        source: "https://www.wow-professions.com/midnight/blacksmithing-specialization-guide-and-builds"
      },
      {
        id: "auction", label: "Aleaciones y consumibles", tag: "Auction House",
        summary: "Producción masiva de aleaciones para vender. Es la rama más líquida y constante de Herrería.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 40, node: "The Old Ways (raíz)", note: "Maximiza la raíz de stats." },
          { pts: 20, node: "Prolific Worker", note: "Multicraft para aleaciones." },
          { pts: 20, node: "Resourceful Smith", note: "Resourcefulness si vendes con margen; elige calidad Oro si ya tienes herramientas azules y skill 100." }
        ],
        after: "Para Tool Stones: 30 en Craftsmithing + 25 en Tool Stones. Para Weaponstones: 30 en Weaponsmithing + 25 en Weaponstones.",
        source: "https://www.wow-professions.com/midnight/blacksmithing-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Para armadura, prioriza los slots que no compiten con set: muñecas, cintura y botas.",
      "Las armas suelen dar una mejora mayor, pero la armadura ofrece más opciones de slots."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/blacksmithing-specializations"
  },

  encantamiento: {
    gid: "1264885717",
    objectiveMap: { gear: "selling", oils: "oils" },
    trees: [
      { name: "Elevating Equipment", focus: "Encantamientos de equipo", desc: "Encantamientos de armas, anillos, pecho, botas, etc., organizados por estilo thalassiano, amani y haranir." },
      { name: "Transitories, Tonics, and Tools", focus: "Aceites y herramientas", desc: "Aceites de maná, varitas de combate, varitas de encantador e ilusiones temporales." },
      { name: "Disenchanting Delegate", focus: "Desencantar", desc: "Mejores materiales al desencantar objetos verdes, azules y épicos." },
      { name: "Spellbound Shatterer", focus: "Stats de crafteo", desc: "Multicraft, Ingenuity y Resourcefulness para encantamientos; reduce el coste de Concentration." }
    ],
    builds: [
      {
        id: "concentration", label: "Concentración / pocos crafts", tag: "Poco tiempo",
        summary: "Para quien no quiere cuidar la subasta: acumula Concentration, craftea un encantamiento de calidad y vuelve en unos días.",
        stats: ["ingenio", "inventiva"],
        steps: [
          { pts: 20, node: "Spellbound Shatterer (raíz)", note: "Los bonus de Concentration se maximizan con 20." },
          { pts: 30, node: "Infinite Ingenuity", note: "Más procs de Ingenuity para reducir el coste." },
          { pts: 20, node: "Sub-rama de encantamiento elegida", note: "Elige Weapon/Ring/Chest o Helm/Shoulder/Boots." }
        ],
        after: "Las recetas de vendedor y subasta no requieren puntos. Usa Concentration para calidad Oro y no malgastes en ramas que no vendas.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      },
      {
        id: "selling", label: "Vender encantamientos", tag: "Auction House",
        summary: "Producción masiva de una categoría de encantamientos. Elige primero la categoría con más demanda de tu reino.",
        stats: ["inventiva", "ingenio"],
        steps: [
          { pts: 30, node: "Elevating Equipment (raíz)", note: "" },
          { pts: 20, node: "Sub-rama elegida", note: "Thalassian, Amani o Haranir." },
          { pts: 20, node: "Spellbound Shatterer (raíz)", note: "Resourcefulness si vendes en plata; usa Shatter Essence antes de craftear." }
        ],
        after: "Para calidad Oro necesitas completar la sub-rama, 3 piezas de equipo azul y skill 100. Los encantamientos no se benefician de Multicraft.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      },
      {
        id: "oils", label: "Aceites y consumibles", tag: "Consumables",
        summary: "Para vender aceites de maná y consumibles. La guía no trae una build cerrada; prioriza la rama de aceites y los stats que la hoja recomienda.",
        stats: ["multicraft", "ingenio"],
        steps: [
          { pts: null, node: "Transitories, Tonics, and Tools", note: "Sube la rama de aceites/mana oils y las recetas de consumibles." },
          { pts: 20, node: "Spellbound Shatterer (raíz)", note: "Stats de crafteo para todas las recetas." },
          { pts: null, node: "Multicraft e Ingenuity", note: "La hoja del canal recomienda estos stats para que los aceites sean rentables." }
        ],
        after: "Para aceites, revisa también la sub-rama de Transitories/Tonics/Tools en las capturas de la hoja; la guía de Wow-Professions no separa una build de aceites.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      },
      {
        id: "disenchant", label: "Desencantar", tag: "Materiales",
        summary: "Build para vender materiales de desencantado. No depende de stats de crafteo: solo de skill y de la sub-rama correcta.",
        stats: [],
        steps: [
          { pts: 30, node: "Disenchanting Delegate (raíz)", note: "Abre las tres sub-ramas." },
          { pts: 30, node: "Dust Deliverer, Shard Supplier o Crystal Collector", note: "Elige según el tipo de objeto que vayas a desencantar." }
        ],
        after: "Con 60 puntos ya produces; luego abre las otras dos sub-ramas. Los stats de crafteo no afectan al desencantado.",
        source: "https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Los encantamientos no se benefician de Multicraft.",
      "Para desencantar no necesitas herramienta épica: una varita rara + accesorios raros suele bastar."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/enchanting-specializations"
  },

  ingenieria: {
    gid: "64568744",
    objectiveMap: { gear: "prof-gear", components: "recycling" },
    trees: [
      { name: "Market Mobility", focus: "Herramientas y accesorios", desc: "Herramientas de Ingeniería, Sastrería, Joyería, Pesca y Minería." },
      { name: "Combat Analytics", focus: "Equipo de combate", desc: "Gafas, brazales, botas y armas de fuego." },
      { name: "Recycling", focus: "Reciclaje y skill", desc: "Mejora el reciclaje y da Resourcefulness, Multicraft e Ingenuity a toda la profesión." },
      { name: "Bits and Bots", focus: "Reactivos y bots", desc: "Bots, aparatos y reactivos; añade procs extra al craftear o reciclar." }
    ],
    builds: [
      {
        id: "prof-gear", label: "Herramientas y accesorios", tag: "Selling Tools",
        summary: "Para craftear equipo de profesión al máximo. La demanda es alta al inicio de expansión y cae después.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 10, node: "Mandatory Tools o Finishing Touches", note: "Elige primero la rama que quieras vender." },
          { pts: 25, node: "Market Mobility (raíz)", note: "Skill para todo el equipo de profesión." },
          { pts: 30, node: "Recycling", note: "Gran bonus de skill para todas las recetas." },
          { pts: 30, node: "Sub-rama elegida", note: "Calidad Oro sin Concentration con skill 100 y equipo azul." }
        ],
        after: "Opcional: 30 en Resourcefulness si haces pedidos y quieres recuperar materiales. Si no haces pedidos, puedes saltarlo y usar Concentration.",
        source: "https://www.wow-professions.com/midnight/engineering-specialization-guide-and-builds"
      },
      {
        id: "combat", label: "Equipo de combate", tag: "Epic Gear",
        summary: "Para gafas, brazales, botas y armas de fuego. Buena demanda al inicio de temporada.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 25, node: "Combat Analytics (raíz)", note: "Abre las cuatro sub-ramas." },
          { pts: 35, node: "Slot elegido", note: "Maxa un solo slot antes de abrir otro." },
          { pts: 30, node: "Recycling", note: "Skill para llegar a calidad Oro sin Concentration." }
        ],
        after: "Opcional: 30 en Resourcefulness. Luego abre los otros slots; cada uno necesita su propia sub-rama.",
        source: "https://www.wow-professions.com/midnight/engineering-specialization-guide-and-builds"
      },
      {
        id: "recycling", label: "Reciclaje y reactivos", tag: "Mass Production",
        summary: "Para vender reactivos de calidad Oro reciclando. Es la build más rentable si el mercado de materiales está caro.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 30, node: "Recycling", note: "Empieza por la raíz de reciclaje." },
          { pts: 10, node: "Bits and Bots", note: "Desbloquea la rama de reactivos." },
          { pts: 20, node: "Resourcefulness", note: "Ahorra materiales al reciclar." },
          { pts: 20, node: "Bits and Bots", note: "Más procs." },
          { pts: 30, node: "Bits", note: "Soul Sprocket de calidad Oro." },
          { pts: 30, node: "Bots", note: "Emergency Soul Link de calidad Oro si el mercado lo justifica." }
        ],
        after: "Si solo reciclas, con Resourcefulness tienes suficiente. Si también crafteas reactivos, añade Multicraft.",
        source: "https://www.wow-professions.com/midnight/engineering-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Recycling es la rama con más skill para toda la profesión; casi todas las builds pasan por 30 puntos ahí.",
      "El equipo de profesión se vende muy bien al inicio, pero la demanda cae rápido."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/engineering-specializations"
  },

  inscripcion: {
    gid: "2145631150",
    objectiveMap: { mass: "consumables", milling: "reagents", quality: "consumables" },
    trees: [
      { name: "Blueprints", focus: "Armas y herramientas", desc: "Bastones, armas de dos manos, arcos y herramientas de Cocina/Alquimia/Inscripción." },
      { name: "Calm Hands", focus: "Stats de crafteo", desc: "Multicraft, Resourcefulness e Ingenuity; enseña el tratado semanal y da un punto extra." },
      { name: "Perfected Products", focus: "Molienda y pergaminos", desc: "Mejora molienda, tintas, cifrados, misivas, contratos y runas vantus." },
      { name: "Darkmoon Curiosity", focus: "Cartas del Faire", desc: "Cartas y trinkets de las cuatro suites, además de sigilos." }
    ],
    builds: [
      {
        id: "weapons", label: "Armas y herramientas", tag: "Crafting Orders",
        summary: "Para craftear armas épicas o herramientas de profesión. Las herramientas se venden muy bien al inicio; las armas tienen demanda más estable.",
        stats: ["inventiva", "multicraft"],
        steps: [
          { pts: 15, node: "Blueprints → Field Research → sub-rama de arma", note: "Bows: Archery; casters: Staff Carving; off-hands: Illumination." },
          { pts: 30, node: "Field Research", note: "Skill para todas las armas." },
          { pts: 30, node: "Blueprints (raíz)", note: "" },
          { pts: 30, node: "Sub-rama de arma elegida", note: "Calidad Oro con materiales Oro y 3 herramientas raras." }
        ],
        after: "Para herramientas de profesión: 30 en Market Research (desbloquea las tres), 30 en Blueprints y 30 en la sub-rama de la herramienta.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      },
      {
        id: "consumables", label: "Misivas y contratos", tag: "Auction House",
        summary: "Producción masiva de misivas, contratos y runas vantus. Las misivas son el mercado más seguro y de mayor volumen.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Calm Hands (raíz)", note: "Multicraft y Resourcefulness para todo." },
          { pts: 20, node: "Dextrous Diligence", note: "Multicraft." },
          { pts: 20, node: "Keen Eye", note: "Resourcefulness." },
          { pts: 30, node: "Perfected Products → Parchment → sub-rama elegida", note: "Perfect Missives, Perfect Contracts o Perfect Vantus Runes." },
          { pts: 30, node: "Parchment", note: "" },
          { pts: 30, node: "Perfected Products (raíz)", note: "Cadena completa para calidad Oro." }
        ],
        after: "Si prefieres calidad Oro primero, invierte el orden: sub-rama 30 → Parchment 30 → raíz 30, y luego los stats.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      },
      {
        id: "reagents", label: "Molienda, tintas y cifrados", tag: "Reagents",
        summary: "Para vender tintas, cifrados y reactivos. La molienda va primero porque los pigmentos Oro son la base de las tintas Oro.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Calm Hands (raíz)", note: "" },
          { pts: 20, node: "Dextrous Diligence", note: "Multicraft." },
          { pts: 20, node: "Keen Eye", note: "Resourcefulness." },
          { pts: 30, node: "Perfect Milling", note: "Pigmentos de calidad Oro." },
          { pts: 30, node: "Processing", note: "" },
          { pts: 30, node: "Perfected Products (raíz)", note: "" },
          { pts: 30, node: "Perfect Inks", note: "Tintas para todas las recetas." },
          { pts: 30, node: "Perfect Ciphers", note: "Opcional; el mercado de cifrados es más pequeño." }
        ],
        after: "Puedes combinar esta build con la de misivas/contratos cuando termines la cadena de molienda.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      },
      {
        id: "darkmoon", label: "Cartas del Faire", tag: "Darkmoon",
        summary: "Especialización de cartas y trinkets. Espera datos de mercado antes de invertir fuerte: depende de qué suite sea BiS.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 20, node: "Darkmoon Curiosity (raíz)", note: "Skill para todas las cartas." },
          { pts: 20, node: "Suite elegida (Rot, Blood, Hunt o Void)", note: "Aprendes a inscribir y transcribir." },
          { pts: 20, node: "Darkmoon Dominion o Darkmoon Sigil", note: "Trinket o embellishment; elige según demanda." }
        ],
        after: "60 puntos para calidad Oro. Después puedes abrir otra suite, el otro nodo o Calm Hands.",
        source: "https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Los contratos están limitados a uno por warband y semana; las misivas tienen mucho más volumen.",
      "Las runas vantus solo tienen demanda cuando abre la banda."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/inscription-specializations"
  },

  joyeria: {
    gid: "1417343130",
    objectiveMap: { gems: "gems", prospecting: "prospecting", quality: "gems" },
    trees: [
      { name: "Thoughtful Throughput", focus: "Stats de crafteo", desc: "Multicraft, Resourcefulness e Ingenuity para todas las recetas de Joyería." },
      { name: "Glamorous Gems", focus: "Gemas", desc: "Corte de los cuatro colores; sub-ramas para gemas Flawless y prismas." },
      { name: "Alluring Accessories", focus: "Anillos y collares", desc: "Anillos, collares y accesorios de profesión para JC, Encantamiento e Inscripción." },
      { name: "Proficient Processor", focus: "Prospectar y triturar", desc: "Reactivos comerciables, prospectado de mena y trituración de gemas." }
    ],
    builds: [
      {
        id: "gems", label: "Gemas", tag: "Auction House",
        summary: "Vende gemas por color. Elige primero el color que cubra más demanda según las guías BiS de clase.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 5, node: "Thoughtful Throughput → Outrageous Output", note: "Desbloquea Multicraft." },
          { pts: 30, node: "Outrageous Output", note: "Máximo Multicraft." },
          { pts: 25, node: "Sub-rama del color elegido", note: "Desbloquea las tres recetas de gema." },
          { pts: 30, node: "Glamorous Gems (raíz)", note: "" },
          { pts: 15, node: "Gema elegida", note: "Calidad Oro sin Concentration." }
        ],
        after: "Si prefieres Resourcefulness primero: 10 en Thoughtful Throughput y 30 en Skilled Savings, luego la sub-rama del color.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      },
      {
        id: "jewelry", label: "Anillos y collares", tag: "Crafting Orders",
        summary: "Para anillos, collares y accesorios de profesión. Anillos y collares son la apuesta más segura.",
        stats: ["inventiva"],
        steps: [
          { pts: 30, node: "Alluring Accessories (raíz)", note: "" },
          { pts: 40, node: "Sub-rama elegida", note: "Rings, Necklaces o Profession Accessories." },
          { pts: 30, node: "Skilled Savings", note: "Resourcefulness; las joyas no pueden Multicraft." }
        ],
        after: "Si quieres una segunda categoría, añade 40 puntos a otra sub-rama. La raíz ya está maxada.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      },
      {
        id: "reagents", label: "Reactivos", tag: "Auction House",
        summary: "Para vender viales, lentes y reactivos. Multicraft para volumen; Resourcefulness para margen.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 5, node: "Thoughtful Throughput → Outrageous Output", note: "" },
          { pts: 30, node: "Outrageous Output", note: "Máximo Multicraft." },
          { pts: 10, node: "Thoughtful Throughput", note: "" },
          { pts: 30, node: "Skilled Savings", note: "Resourcefulness." }
        ],
        after: "Para calidad Oro: 15 en Proficient Processor, 30 en Material Manufacturer y 30 en Basic Reagents u Optional Reagents.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      },
      {
        id: "prospecting", label: "Prospectar y triturar", tag: "Processing",
        summary: "Para vender gemas y Gemdust. Prospectar mena y triturar gemas alimenta a todos los joyeros.",
        stats: ["inventiva"],
        steps: [
          { pts: 10, node: "Proficient Processor", note: "" },
          { pts: 30, node: "Prospecting Pro", note: "El último punto da gemas extra." },
          { pts: 1, node: "Cada tipo de mena", note: "Deja Dazzling Thorium para más adelante." },
          { pts: 5, node: "Thoughtful Throughput", note: "" },
          { pts: 30, node: "Skilled Savings", note: "Resourcefulness." },
          { pts: 20, node: "Proficient Processor", note: "Calidad Oro al prospectar." }
        ],
        after: "Para triturar: 10 en Proficient Processor, 40 en Crushing Connoisseur y 20 más en Proficient Processor.",
        source: "https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Las joyas no se benefician de Multicraft; para anillos y collares, Resourcefulness es la stat clave.",
      "Para gemas y reactivos, Multicraft suele ser mejor."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/jewelcrafting-specializations"
  },

  peleteria: {
    gid: "70446512",
    objectiveMap: { gear: "standard", materials: "auction" },
    trees: [
      { name: "Learned Leatherworker", focus: "Stats de crafteo", desc: "Multicraft, Resourcefulness e Ingenuity para toda la profesión." },
      { name: "Lasting Leather", focus: "Armadura de cuero", desc: "Recetas de cuero para las 8 piezas; desbloquea el set épico Silvermoon Agent." },
      { name: "Safeguarding Scales", focus: "Armadura de malla", desc: "Recetas de malla para las 8 piezas; desbloquea el set épico Farstrider." },
      { name: "Flawless Fortes", focus: "Consumibles y herramientas", desc: "Armor Kits, herramientas de profesión, accesorios y reactivos opcionales." }
    ],
    builds: [
      {
        id: "standard", label: "Equipo de cuero o malla", tag: "Armor",
        summary: "La build más segura para ser autosuficiente con una armadura. Lasting Leather y Safeguarding Scales tienen la misma estructura.",
        stats: ["inventiva", "multicraft", "ingenio"],
        steps: [
          { pts: 30, node: "Raíz de Lasting Leather o Safeguarding Scales", note: "Elige cuero o malla." },
          { pts: 30, node: "Lado izquierdo o derecho", note: "Izquierda: Head/Chest/Shoulder/Wrist. Derecha: Legs/Hands/Waist/Feet." },
          { pts: 30, node: "El otro lado", note: "Desbloquea las 4 recetas restantes." }
        ],
        after: "Después puedes abrir la otra armadura (cuero ↔ malla) o invertir en Learned Leatherworker para stats.",
        source: "https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds"
      },
      {
        id: "orders", label: "Pedidos de fabricación", tag: "Trade Chat",
        summary: "Para llenar pedidos de un slot concreto. Necesitas unos 60 puntos para abrir la armadura y 20 por slot.",
        stats: ["inventiva", "ingenio"],
        steps: [
          { pts: 30, node: "Raíz de la armadura", note: "" },
          { pts: 30, node: "Sub-rama del slot", note: "Elige el lado que contiene el slot que quieres." },
          { pts: 20, node: "Nodo del slot concreto", note: "Ej.: Wrist, Helm, Chest." }
        ],
        after: "Alternativa de equipo de profesión: 30 en la raíz de Flawless Fortes + 30 en el siguiente nodo; cubre todas las herramientas.",
        source: "https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds"
      },
      {
        id: "auction", label: "Consumibles y reactivos", tag: "Auction House",
        summary: "Para vender Armor Kits, reactivos y materiales intermedios en masa.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 10, node: "Flawless Fortes → Commanding Commodities → Crucial Consumables", note: "Desbloquea Armor Kits y tambores." },
          { pts: 5, node: "Learned Leatherworker (raíz)", note: "" },
          { pts: 30, node: "Mastering Multicraft", note: "Multicraft para consumibles." },
          { pts: 10, node: "Learned Leatherworker", note: "Desbloquea la segunda sub-rama." },
          { pts: 30, node: "Waning Waste", note: "Resourcefulness." }
        ],
        after: "Para Brimming Basics (reactivos) u Overwhelming Optionals, cambia la sub-rama de Flawless Fortes y vuelve a llenar la cadena.",
        source: "https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Las dos ramas de armadura son idénticas en estructura; elige según el tipo de equipo que uses o pidan.",
      "Profession Equipment es una inversión única de ~60 puntos para todas las herramientas."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/leatherworking-specializations"
  },

  sastreria: {
    gid: "19777938",
    objectiveMap: { gear: "armor", materials: "bolt", bags: "standard" },
    trees: [
      { name: "Sin'dorei Finery", focus: "Armaduras de tela", desc: "Recetas de armadura para los 9 slots; los nodos por slot desbloquean las recetas épicas." },
      { name: "Nimble Needlework", focus: "Bolts y embellishments", desc: "Cooldowns diarios de Arcanoweave y Sunfire Silk, y equipo con embellishments." },
      { name: "Fabric Specialist", focus: "Farmear tela", desc: "Aumenta la cantidad y calidad de tela en Harandar/Voidstorm y Eversong/Zul'Aman." },
      { name: "Fiber Arts", focus: "Stats y skill", desc: "Skill, Multicraft, Resourcefulness y reducción de Concentration para toda la profesión." }
    ],
    builds: [
      {
        id: "armor", label: "Armaduras y pedidos", tag: "Crafting Orders",
        summary: "Para craftear equipo de tela y llenar pedidos. Maxa un slot antes de abrir otro y añade Fiber Arts para skill global.",
        stats: ["multicraft", "inventiva", "ingenio"],
        steps: [
          { pts: 5, node: "Sin'dorei Finery (raíz)", note: "Desbloquea una sub-rama." },
          { pts: 10, node: "Sub-rama del slot elegido", note: "Desbloquea la primera receta del slot." },
          { pts: 30, node: "Sub-rama del medio", note: "Skill y stats para el slot." },
          { pts: 30, node: "Sin'dorei Finery (raíz)", note: "" },
          { pts: 30, node: "Fiber Arts (raíz)", note: "Skill para todas las recetas; hazlo antes de maximizar slots." }
        ],
        after: "Luego 30 en cada una de las otras dos sub-ramas para abrir todos los slots. Para calidad Oro sin Concentration necesitarás muchos puntos ocultos en Fiber Arts/Fabric Specialist.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      },
      {
        id: "bolt", label: "Bolts y embellishments", tag: "Daily CDs",
        summary: "Para producir Arcanoweave/Sunfire Silk y equipo con embellishments. Ideal para un ejército de alters o venta constante.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 20, node: "Nimble Needlework (raíz)", note: "Desbloquea ambos cooldowns de bolt." },
          { pts: 15, node: "Segundo nodo de la rama elegida", note: "Arcanoweave o Sunfire Silk; desbloquea la última sub-rama." },
          { pts: 20, node: "Última sub-rama", note: "Reduce el cooldown de ~17 h a ~8 h 30 min." },
          { pts: 30, node: "Creative Efficiency (Fiber Arts)", note: "Multicraft para todos los crafteos." },
          { pts: 10, node: "Fiber Arts (raíz)", note: "" },
          { pts: 30, node: "Textile Utilization", note: "Resourcefulness." }
        ],
        after: "Añade 15 en Fabric Specialist y 25 en la sub-rama derecha para Multicraft oculto; ayuda a llegar a bolts de calidad Oro sin Concentration.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      },
      {
        id: "farming", label: "Farmear tela", tag: "Open World",
        summary: "Para quien pasa mucho tiempo en mundo abierto, mazmorras o delves. Aumenta la tela y su calidad.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 30, node: "Fabric Specialist (raíz)", note: "Abre las dos sub-ramas de zonas." },
          { pts: 20, node: "Nimble Needlework (raíz)", note: "Los mobs empiezan a soltar Arcanoweave y Sunfire Silk." },
          { pts: 25, node: "Otherworldly Cloth o Eastern Kingdoms Cloth", note: "Harandar/Voidstorm o Eversong/Zul'Aman." }
        ],
        after: "Solo el último punto (25) da el aumento de calidad; mientras llenas la sub-rama no esperes más gotas. Los mobs de Mythic+ no sueltan tela.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      },
      {
        id: "standard", label: "Build estándar / diarias", tag: "All-Rounder",
        summary: "Build versátil para empezar: cooldowns diarios y equipo con embellishments, sin comprometerte con una sola rama.",
        stats: ["multicraft", "inventiva"],
        steps: [
          { pts: 20, node: "Nimble Needlework (raíz)", note: "Desbloquea los dos cooldowns." },
          { pts: 15, node: "Segundo nodo de la rama elegida", note: "Arcanoweave o Sunfire Silk." },
          { pts: 20, node: "Última sub-rama", note: "Cooldown reducido y receta de brazales épicos." }
        ],
        after: "Después elige Bolt Crafting para stats, Farming para tela o Armor para pedidos. Para mochilas no hay rama específica; la build estándar y Fiber Arts son suficientes.",
        source: "https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Sastrería necesita muchos más puntos que otras profesiones para alcanzar calidad Oro sin Concentration.",
      "Las bolsas no se benefician de Multicraft ni Ingenuity; no gastes puntos específicos en ellas."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/tailoring-specializations"
  },

  herboristeria: {
    gid: "2028290667",
    objectiveMap: { general: "druid", rare: "druid", fast: "druid" },
    trees: [
      { name: "Bountiful Harvests", focus: "Rendimiento", desc: "Aumenta el mínimo y máximo de hierbas; sub-ramas por tipo de hierba y Nocturnal Lotus." },
      { name: "Botany", focus: "Recolección montada", desc: "40 puntos permiten recolectar montado; mejora Deftness, Perception y Finesse." },
      { name: "Midnight Overload", focus: "Sobrecarga y motes", desc: "Especialización en nodos infundidos y en el farmeo de motes." }
    ],
    builds: [
      {
        id: "druid", label: "Con druida / farmeo general", tag: "Druid",
        summary: "Si usas druida ya puedes recolectar montado; invierte directo en rendimiento y luego en las hierbas que farmees.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Bountiful Harvests (raíz)", note: "+1 mínimo y máximo de hierbas, y skill para todas." },
          { pts: 30, node: "Sub-rama de la hierba principal", note: "Bloom Bringer, Thorn Thresher, Root Rummager, Silver Searcher o Lily Looter." }
        ],
        after: "Si buscas Nocturnal Lotus, maxa la sub-rama de la hierba que farmees: el último punto aumenta la probabilidad de encontrarlo.",
        source: "https://www.wow-professions.com/midnight/herbalism-specialization-guide-and-builds"
      },
      {
        id: "non-druid", label: "Sin druida / montado", tag: "Mounted",
        summary: "Para cualquier clase que no sea druida: primero desbloquea la recolección montada y luego el rendimiento.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Botany (raíz)", note: "Recolectar montado; también da Deftness, Perception y Finesse." },
          { pts: 40, node: "Bountiful Harvests (raíz)", note: "Rendimiento y skill." },
          { pts: 30, node: "Sub-rama de la hierba principal", note: "Elige según lo que farmees." }
        ],
        after: "No sientas que gastas puntos de más en Botany: también necesitas sus stats y la comodidad de recolectar montado.",
        source: "https://www.wow-professions.com/midnight/herbalism-specialization-guide-and-builds"
      },
      {
        id: "overload", label: "Sobrecarga y motes", tag: "Infused",
        summary: "Para farmear motes y aprovechar los nodos infundidos. Abre las sub-ramas aunque no las maxes de inmediato.",
        stats: ["destreza", "percepcion"],
        steps: [
          { pts: 40, node: "Botany (raíz)", note: "Solo si no eres druida; te permite recolectar montado." },
          { pts: 40, node: "Midnight Overload (raíz)", note: "Mejora la sobrecarga de nodos infundidos." },
          { pts: 20, node: "Sub-ramas Lightfused, Wild, Primal y Voidbound", note: "Abrirlas reduce desventajas y mejora los motes." }
        ],
        after: "La hoja del canal prioriza Destreza para farmeo masivo; Percepción es la segunda y Delicadeza se usa menos porque los materiales comunes valen poco.",
        source: "https://www.wow-professions.com/midnight/herbalism-specialization-guide-and-builds"
      }
    ],
    notes: [
      "Druida es la mejor opción para recolectar: recoge montado por defecto y usa vuelo instantáneo.",
      "La hoja del canal recomienda Destreza como stat principal; Percepción para materiales raros.",
      "El aguardiente de la luna negra es un consumible clave según la hoja."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/herbalism-overview-trainer-locations-treasures-tools"
  },

  mineria: {
    gid: "1060061825",
    objectiveMap: { general: "general", rare: "general", fast: "general" },
    trees: [
      { name: "Meticulous Mining", focus: "Recolección montada", desc: "40 puntos permiten minar montado y mejoran Finesse, Deftness, Perception y Skill." },
      { name: "Plentiful Ores", focus: "Rendimiento y skill", desc: "Skill para todas las menas; sub-ramas por tipo de mena y Dazzling Thorium." },
      { name: "Over-LODED", focus: "Sobrecarga y motes", desc: "Especialización en nodos infundidos y en el farmeo de motes." }
    ],
    builds: [
      {
        id: "general", label: "Farmeo general", tag: "Mounted",
        summary: "La build base para cualquier minero: montado primero, skill después y sub-ramas de las menas más abundantes.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Meticulous Mining (raíz)", note: "Minar montado; funciona incluso sin druida." },
          { pts: 50, node: "Plentiful Ores (raíz)", note: "+20 skill para todas las menas." },
          { pts: 40, node: "Brilliant Silver y Refulgent Copper", note: "Prioriza estas sub-ramas; Umbral Tin al final." }
        ],
        after: "Las tres menas aparecen en todas las zonas; no necesitas cambiar de build por zona.",
        source: "https://www.wow-professions.com/midnight/mining-specialization-guide-and-builds"
      },
      {
        id: "rich", label: "Depósitos ricos y vetas", tag: "Rich Deposits",
        summary: "Para maximizar el rendimiento de depósitos ricos. Rich Deposits es más útil que Seams porque hay muchas menos vetas.",
        stats: ["destreza", "percepcion", "delicadeza"],
        steps: [
          { pts: 40, node: "Meticulous Mining (raíz)", note: "" },
          { pts: 50, node: "Plentiful Ores (raíz)", note: "" },
          { pts: 35, node: "Rich Deposits", note: "Skill, Finesse, Deftness y Perception para depósitos ricos." }
        ],
        after: "Seams déjalo para el final: hay pocas vetas y el beneficio es menor.",
        source: "https://www.wow-professions.com/midnight/mining-specialization-guide-and-builds"
      },
      {
        id: "overload", label: "Sobrecarga y motes", tag: "Infused",
        summary: "Para farmear motes y aprovechar los nodos infundidos. Abre las sub-ramas para reducir riesgos.",
        stats: ["destreza", "percepcion"],
        steps: [
          { pts: 40, node: "Meticulous Mining (raíz)", note: "" },
          { pts: 50, node: "Plentiful Ores (raíz)", note: "" },
          { pts: 20, node: "Over-LODED (raíz)", note: "Mejora la sobrecarga." },
          { pts: 20, node: "Lightfused, Wild, Primal y Voidbound", note: "Abre las sub-ramas; luego maxa la que corresponda a tu farmeo." }
        ],
        after: "La hoja prioriza Destreza; Percepción ayuda con Dazzling Thorium y materiales raros.",
        source: "https://www.wow-professions.com/midnight/mining-specialization-guide-and-builds"
      }
    ],
    notes: [
      "No hay diferencia de menas por zona: Brilliant Silver, Refulgent Copper y Umbral Tin aparecen en todas.",
      "La hoja del canal prioriza Destreza; Percepción para Dazzling Thorium y raros."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/mining-overview-trainer-locations-ores-tools"
  },

  desuello: {
    gid: "391408451",
    objectiveMap: { general: "general", rare: "rares", fast: "general" },
    trees: [
      { name: "Thorough Tanning", focus: "Base y Sharpen Your Knife", desc: "Árbol base: garantiza una piel o escama con Sharpen Your Knife y da cargas extra." },
      { name: "Gainful Gathering", focus: "Materiales específicos", desc: "Carne, materiales por especie, Percepción y difusores para motes." },
      { name: "Talented Tracker", focus: "Bestias majestuosas", desc: "Lures, bestias Renown y materiales Majestic; la rama de farmeo de raros." }
    ],
    builds: [
      {
        id: "general", label: "Farmeo general", tag: "Skinning",
        summary: "La base para cualquier desuellador: Sharpen Your Knife con 3 cargas, skill y Percepción para materiales raros.",
        stats: ["percepcion", "destreza", "delicadeza"],
        steps: [
          { pts: 40, node: "Thorough Tanning (raíz)", note: "Sharpen Your Knife y tercera carga a 40." },
          { pts: 20, node: "Lasting Leather o Superb Scales", note: "Elige cuero o escamas según lo que necesites." },
          { pts: 40, node: "Sub-rama elegida", note: "Skill y Percepción para ese tipo de bestia." },
          { pts: 35, node: "Gainful Gathering (raíz) → Trophy Taker", note: "Percepción para materiales raros; no pases de 35 en Gainful." }
        ],
        after: "No inviertas más de 35 en Gainful Gathering: Radiant Stomach no compensa. Luego puedes abrir Talented Tracker.",
        source: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
      },
      {
        id: "rares", label: "Pieles raras / majestuosas", tag: "Renowned Beasts",
        summary: "Para cazar bestias majestuosas y farmear Majestic Claw/Hide/Fin. Necesitas lures y Percepción.",
        stats: ["percepcion", "destreza"],
        steps: [
          { pts: 40, node: "Thorough Tanning (raíz)", note: "" },
          { pts: 40, node: "Talented Tracker (raíz)", note: "Aprende lures y desbloquea Grand Beast Lure." },
          { pts: 20, node: "Majestic Materials o Component Collector", note: "Majestic Materials para raros; Component Collector para volumen de cuero/escamas." }
        ],
        after: "Usa las lures en las zonas correctas y con Sixth Sense activo. Percepción alta para materiales majestuosos.",
        source: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
      },
      {
        id: "alt-army", label: "Varios personajes", tag: "Alt Army",
        summary: "Build mínima para varios alters: Sharpen Your Knife, skill y Percepción. No necesitas más puntos para que sea rentable.",
        stats: ["percepcion", "destreza", "delicadeza"],
        steps: [
          { pts: 40, node: "Thorough Tanning (raíz)", note: "" },
          { pts: 40, node: "Lasting Leather o Superb Scales", note: "" },
          { pts: 35, node: "Gainful Gathering (raíz)", note: "Corta en 35." }
        ],
        after: "Con esto basta para varios alters; los stats del equipo importan menos que la cantidad de personajes.",
        source: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
      }
    ],
    notes: [
      "Wowhead prioriza Percepción por las bestias de alto valor; la hoja del canal prioriza Destreza para farmeo masivo.",
      "Sharpen Your Knife garantiza una piel o escama en el siguiente desuello; usa las cargas en bestias raras."
    ],
    guide: "https://www.wowhead.com/guide/midnight/professions/skinning-overview-trainer-locations-hides-tracking-tools"
  },

  cocina: {
    gid: "559133695",
    trees: [],
    builds: [],
    emptyNote: "Cocina no tiene árbol de especialización en Midnight. Su progresión depende de recetas, skill y conocimiento, no de puntos de especialización.",
    notes: ["Revisa la pestaña de Cocina y Pesca de la hoja para recetas y notas."],
    guide: "https://www.wowhead.com/guide/midnight/professions"
  },

  pesca: {
    gid: "559133695",
    trees: [],
    builds: [],
    emptyNote: "Pesca no tiene árbol de especialización en Midnight. Su progresión depende de skill, recetas y conocimiento, no de puntos de especialización.",
    notes: ["Revisa la pestaña de Cocina y Pesca de la hoja para recetas y notas."],
    guide: "https://www.wowhead.com/guide/midnight/professions"
  }
};
