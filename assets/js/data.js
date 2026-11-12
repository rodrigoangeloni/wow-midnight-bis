"use strict";

window.WOW_DATA = (() => {
  // Atributos
  const STATS = {
    inventiva: { name: "Inventiva", en: "Resourcefulness", short: "Inventiva", icon: "🧺", color: "#6fe0c0", desc: "Ahorra materiales al fabricar." },
    ingenio: { name: "Ingenio", en: "Ingenuity", short: "Ingenio", icon: "🔄", color: "#b79bff", desc: "Recupera parte de la Concentración gastada." },
    multicraft: { name: "Fabricación múltiple", en: "Multicraft", short: "Fab. múltiple", icon: "📦", color: "#f0c75e", desc: "Posibilidad de fabricar unidades adicionales." },
    speed: { name: "Velocidad de fabricación", en: "Crafting Speed", short: "Velocidad", icon: "⏱️", color: "#7cc7ff", desc: "Reduce el tiempo de fabricación." },
    delicadeza: { name: "Delicadeza", en: "Finesse", short: "Delicadeza", icon: "🌾", color: "#8ee06a", desc: "Obtén más materiales al recolectar." },
    percepcion: { name: "Percepción", en: "Perception", short: "Percepción", icon: "👁️", color: "#c9a2ff", desc: "Más probabilidad de encontrar materiales especiales." },
    destreza: { name: "Destreza", en: "Deftness", short: "Destreza", icon: "🏃", color: "#ffb26b", desc: "Aumenta la velocidad de recolección." }
  };

  // Categorías
  const CATEGORIES = {
    crafting: { label: "Fabricación", emoji: "⚒️" },
    gathering: { label: "Recolección", emoji: "🌿" },
    secondary: { label: "Secundarias", emoji: "🍳" }
  };

  // Iconos de profesión
  const PROFESSION_ICONS = {
    alquimia: "ui_profession_alchemy",
    herreria: "ui_profession_blacksmithing",
    encantamiento: "ui_profession_enchanting",
    ingenieria: "ui_profession_engineering",
    inscripcion: "ui_profession_inscription",
    joyeria: "ui_profession_jewelcrafting",
    peleteria: "ui_profession_leatherworking",
    sastreria: "ui_profession_tailoring",
    herboristeria: "ui_profession_herbalism",
    mineria: "ui_profession_mining",
    desuello: "ui_profession_skinning",
    cocina: "ui_profession_cooking",
    pesca: "ui_profession_fishing"
  };

  // Iconos de objeto (ID de Wowhead → slug)
  const ITEM_ICONS = {
    259205: "inv_wand_1h_alchemybloodelf_b_01",
    267052: "inv_armor_alchemy_b_01",
    244812: "inv_armor_helm_alchemy_b_01",
    246537: "inv_mace_1h_blacksmithbloodelf_b_01",
    244813: "inv_tabard_blacksmithing_b_01_black",
    259230: "inv_12_profession_blacksmithing_blacksmithstoolkit_purple",
    244177: "inv_misc_1h_enchantingbloodelf_b_01",
    267056: "inv_helm_armor_enchantinghat_b_01",
    246527: "inv_offhand_1h_questbloodelf_b_01",
    259183: "inv_mace_1h_engineeringbloodelf_b_01",
    259171: "inv_helm_armor_engineering_b_01_orange",
    244810: "inv_armor_engineering_b_01_orange",
    259209: "inv_misc_1h_scribesquill_b_01_silver",
    246525: "inv_12_profession_jewelcrafting_inscription_magnifyingglass_red",
    246524: "inv_helm_armor_scribesspecs_b_01_silver",
    259181: "inv_misc_1h_jewelclampbloodelf_b_01",
    246526: "inv_helm_armor_jewelersspecs_b_01",
    244814: "inv_tabard_jewelcrafting_b_01",
    246536: "inv_knife_1h_leatherbloodelf_b_01",
    244811: "inv_armor_leatherworking_b_01",
    259232: "inv_12_profession_blacksmithing_leatherworkerstoolkit_purple",
    259177: "inv_misc_1h_tailoringbloodelf_b_01",
    267062: "inv_chest_armor_tailoringrobe_b_01",
    259234: "inv_12_profession_blacksmithing_tailorstoolkit_purple",
    246533: "inv_knife_1h_herbalismbloodelf_b_01",
    267060: "inv_helm_armor_herbalism_b_01",
    244807: "inv_cape_special_herbalism_b_01",
    246534: "inv_axe_1h_miningbloodelf_b_01",
    259175: "inv_cape_special_mining_c_01",
    259173: "inv_helm_armor_mining_a_01",
    246535: "inv_knife_1h_skinningbloodelf_b_01",
    244808: "inv_cape_special_skinning_c_01",
    244809: "inv_helm_armor_skinning_a_01",
    259207: "inv_misc_1h_rollingpin_b_01",
    267054: "inv_helm_armor_chefhat_b_01",
    259179: "inv_misc_2h_fishingpolebloodelf_b_01",
    239638: "inv_helm_armor_fishing_b_01"
  };

  // Profesiones y objetivos
  const PROFESSIONS = [
    {
      id: "alquimia", name: "Alquimia", emoji: "⚗️", category: "crafting", toolIcon: "🪄", quickStat: "multicraft",
      tool: { id: 259205, es: "Vara mezcladora de alquimista dorada", en: "Gilded Alchemist's Mixing Rod", random: 48 },
      accessories: [
        { id: 267052, es: "Overol de alquimia thalassiano", en: "Thalassian Alchemy Coveralls", slot: "Pecho", stats: { multicraft: 35 } },
        { id: 244812, es: "Gorro mezclador de alquimista thalassiano", en: "Thalassian Alchemist's Mixcap", slot: "Cabeza", stats: { multicraft: 10 } }
      ],
      objectives: [
        {
          id: "mass", label: "Producción masiva", sub: "Pociones, frascos, ampollas y reactivos", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Tus accesorios ya suman <strong>+45 de Fabricación múltiple</strong>. La herramienta con Fabricación múltiple y el encantamiento haranir empujan la producción extra. Si usas Concentración, cambia el encantamiento a Ingenio ren'dorei."
        },
        {
          id: "quality", label: "Máxima calidad con Concentración", sub: "Sube la calidad gastando Concentración", priority: "ingenio", toolStat: "ingenio",
          enchants: [{ when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Ingenio recupera parte de la Concentración. Los accesorios mantienen <strong>+45 de Fabricación múltiple</strong>, así que la herramienta es tu palanca principal para calidad."
        }
      ]
    },
    {
      id: "herreria", name: "Herrería", emoji: "🔨", category: "crafting", toolIcon: "🔨", quickStat: "inventiva",
      tool: { id: 246537, es: "Martillo de herrero forjado con sol", en: "Sunforged Blacksmith's Hammer", random: 48 },
      accessories: [
        { id: 244813, es: "Atavío de controlahierro thalassiano", en: "Thalassian Ironbender's Regalia", slot: "Pecho", stats: { multicraft: 10 } },
        { id: 259230, es: "Caja de herramientas de herrero forjada con sol", en: "Sunforged Blacksmith's Toolbox", slot: "Juego de herramientas", stats: { inventiva: 13, speed: 13 } }
      ],
      objectives: [
        {
          id: "gear", label: "Equipo, armas y herramientas", sub: "Armaduras y piezas de calidad", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "La caja de herramientas ya aporta <strong>+13 Inventiva</strong>. Si no usas Concentración, Inventiva amani refuerza el ahorro; si la usas, Ingenio ren'dorei recupera parte."
        },
        {
          id: "consumables", label: "Consumibles y reactivos", sub: "Aleaciones y producción masiva", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "El atavío ya da <strong>+10 de Fabricación múltiple</strong>. Para lotes grandes, prioriza Multicraft en la herramienta y el encantamiento haranir."
        }
      ]
    },
    {
      id: "encantamiento", name: "Encantamiento", emoji: "✨", category: "crafting", toolIcon: "🪄", quickStat: "inventiva",
      tool: { id: 244177, es: "Vara de torio deslumbrante rúnica", en: "Runed Dazzling Thorium Rod", random: 48 },
      accessories: [
        { id: 267056, es: "Capota de encantador thalassiano", en: "Thalassian Enchanter's Bonnet", slot: "Cabeza", stats: { inventiva: 26 } },
        { id: 246527, es: "Prisma rúnico thalassiano armonizado", en: "Attuned Thalassian Rune-Prism", slot: "Enfoque de encantamientos", stats: { inventiva: 8, speed: 18 } }
      ],
      objectives: [
        {
          id: "gear", label: "Encantamientos de equipo", sub: "Armaduras, armas y encantamientos", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "La capota y el prisma ya suman <strong>+34 de Inventiva</strong>. La herramienta define si refuerzas el ahorro o la recuperación de Concentración."
        },
        {
          id: "oils", label: "Aceites y consumibles", sub: "Producción masiva", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Los accesorios mantienen su Inventiva fija; para aceites, cambia la misiva de la herramienta a <strong>Fabricación múltiple</strong>."
        }
      ]
    },
    {
      id: "ingenieria", name: "Ingeniería", emoji: "⚙️", category: "crafting", toolIcon: "🔧", quickStat: "inventiva",
      tool: { id: 259183, es: "Multiherramienta de turbochatarrero v9", en: "Turbo-Junker's Multitool v9", random: 48 },
      accessories: [
        { id: 259171, es: "Proyector de rayos montado en la cabeza", en: "Head-Mounted Beam Bummer", slot: "Cabeza", stats: { multicraft: 18 } },
        { id: 244810, es: "Guanteletes de desguazador thalassiano", en: "Thalassian Scrapmaster's Gauntlets", slot: "Manos", stats: { inventiva: 13, speed: 13 } }
      ],
      objectives: [
        {
          id: "gear", label: "Equipo y objetos de calidad", sub: "Armas, miras y dispositivos", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Los guanteletes ya dan <strong>+13 Inventiva</strong>. El proyector aporta +18 de Fabricación múltiple, útil si también haces componentes."
        },
        {
          id: "components", label: "Componentes y reactivos", sub: "Producción masiva", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "El proyector ya suma <strong>+18 de Fabricación múltiple</strong>. Para componentes, herramienta con Multicraft y encantamiento haranir es la combinación más directa."
        }
      ]
    },
    {
      id: "inscripcion", name: "Inscripción", emoji: "🖋️", category: "crafting", toolIcon: "🖋️", quickStat: "multicraft",
      tool: { id: 259209, es: "Pluma sin'dorei dorada", en: "Gilded Sin'dorei Quill", random: 48 },
      accessories: [
        { id: 246525, es: "Lente cristalino de escriba thalassiano", en: "Thalassian Scribe's Crystalline Lens", slot: "Lupa", stats: { inventiva: 10, speed: 15 } },
        { id: 246524, es: "Escrutinadores de texto impecables", en: "Flawless Text Scrutinizers", slot: "Cabeza", stats: { multicraft: 10 } }
      ],
      objectives: [
        {
          id: "mass", label: "Cartas, contratos y misivas", sub: "Producción masiva", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Los escrutinadores ya dan <strong>+10 de Fabricación múltiple</strong>. La lente aporta +10 Inventiva y +15 Velocidad."
        },
        {
          id: "milling", label: "Molienda", sub: "Milling: hierbas en pigmentos", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }],
          tip: "Fabricación múltiple no ayuda a moler. Usa <strong>Inventiva</strong> en la herramienta para ahorrar materiales; la lente ya suma +10."
        },
        {
          id: "quality", label: "Calidad con Concentración", sub: "Fabricación de máxima calidad", priority: "ingenio", toolStat: "ingenio",
          enchants: [{ when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Ingenio recupera Concentración. Los accesorios mantienen +10 Multicraft, +10 Inventiva y +15 Velocidad."
        }
      ]
    },
    {
      id: "joyeria", name: "Joyería", emoji: "💎", category: "crafting", toolIcon: "💎", quickStat: "multicraft",
      tool: { id: 259181, es: "Pinzas de gigagema", en: "Giga-Gem Grippers", random: 48 },
      accessories: [
        { id: 246526, es: "Lupas de precisión Ojo de mago", en: "Mage-Eye Precision Loupes", slot: "Cabeza", stats: { multicraft: 10 } },
        { id: 244814, es: "Gran cobertor de lapidario thalassiano", en: "Thalassian Gemshaper's Grand Cover", slot: "Pecho", stats: { inventiva: 10, speed: 15 } }
      ],
      objectives: [
        {
          id: "gems", label: "Gemas y reactivos", sub: "Producción masiva", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Las lupas ya dan <strong>+10 de Fabricación múltiple</strong>. Para gemas y reactivos, herramienta con Multicraft y encantamiento haranir maximizan unidades extra."
        },
        {
          id: "prospecting", label: "Prospectado y trituración", sub: "Prospecting / Crushing", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }],
          tip: "Multicraft no beneficia el prospectado. Usa <strong>Inventiva</strong> en la herramienta; el gran cobertor ya aporta +10."
        },
        {
          id: "quality", label: "Calidad con Concentración", sub: "Gemas de máxima calidad", priority: "ingenio", toolStat: "ingenio",
          enchants: [{ when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Ingenio recupera parte de la Concentración. Los accesorios mantienen +10 Multicraft, +10 Inventiva y +15 Velocidad."
        }
      ]
    },
    {
      id: "peleteria", name: "Peletería", emoji: "🥋", category: "crafting", toolIcon: "🔪", quickStat: "inventiva",
      tool: { id: 246536, es: "Cuchillo de peletero forjado con sol", en: "Sunforged Leatherworker's Knife", random: 48 },
      accessories: [
        { id: 244811, es: "Atavío de artesano de pellejos thalassiano", en: "Thalassian Hideshaper's Regalia", slot: "Pecho", stats: { multicraft: 10 } },
        { id: 259232, es: "Juego de herramientas de peletero forjado con sol", en: "Sunforged Leatherworker's Toolset", slot: "Juego de herramientas", stats: { inventiva: 13, speed: 13 } }
      ],
      objectives: [
        {
          id: "gear", label: "Armaduras de cuero y malla", sub: "Equipo de calidad", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "El juego de herramientas ya da <strong>+13 Inventiva</strong>. Si usas Concentración, cambia el encantamiento a Ingenio ren'dorei."
        },
        {
          id: "materials", label: "Materiales intermedios", sub: "Consumibles y componentes", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "El atavío ya suma <strong>+10 de Fabricación múltiple</strong>. Para materiales intermedios, prioriza Multicraft en la herramienta."
        }
      ]
    },
    {
      id: "sastreria", name: "Sastrería", emoji: "✂️", category: "crafting", toolIcon: "✂️", quickStat: "inventiva",
      tool: { id: 259177, es: "Pincitas sin'dorei autoafilantes", en: "Self-Sharpening Sin'dorei Snippers", random: 84 },
      accessories: [
        { id: 267062, es: "Hilos de sastre thalassiano", en: "Thalassian Tailor's Threads", slot: "Pecho", stats: { speed: 53, multicraft: 35 } },
        { id: 259234, es: "Conjunto de agujas forjado con sol", en: "Sunforged Needle Set", slot: "Juego de herramientas", stats: { inventiva: 13, speed: 13 } }
      ],
      objectives: [
        {
          id: "gear", label: "Armaduras y equipo", sub: "Tela y equipo de calidad", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "El conjunto de agujas ya da <strong>+13 Inventiva</strong>. Los hilos de sastre aportan +35 Multicraft y +53 Velocidad, así que la herramienta es tu palanca para Inventiva."
        },
        {
          id: "materials", label: "Materiales: tejido e hilos", sub: "Arcanoweave y Spellthreads", priority: "multicraft", toolStat: "multicraft",
          enchants: [{ when: "Producción normal", name: "Fabricación múltiple haranir" }, { when: "Con Concentración", name: "Ingenio ren'dorei" }],
          tip: "Los hilos de sastre ya suman <strong>+35 de Fabricación múltiple</strong>. Con la herramienta en Multicraft, la producción de materiales despega."
        },
        {
          id: "bags", label: "Mochilas", sub: "Equipo para almacenar", priority: "inventiva", toolStat: "inventiva",
          enchants: [{ when: "Sin Concentración", name: "Inventiva amani" }],
          tip: "Para mochilas, prioriza <strong>Inventiva</strong> para ahorrar materiales. La velocidad de los accesorios ayuda a fabricar lotes más rápido."
        }
      ]
    },
    {
      id: "herboristeria", name: "Herboristería", emoji: "🌱", category: "gathering", toolIcon: "🌿", quickStat: "delicadeza",
      tool: { id: 246533, es: "Hoz forjada con sol", en: "Sunforged Sickle", random: 48 },
      accessories: [
        { id: 267060, es: "Capucha de herborista thalassiano", en: "Thalassian Herbalist's Cowl", slot: "Cabeza", stats: { destreza: 44, percepcion: 44 } },
        { id: 244807, es: "Cesta de herbolario thalassiano", en: "Thalassian Herbtender's Cradle", slot: "Espalda", stats: { delicadeza: 25 } }
      ],
      objectives: [
        {
          id: "general", label: "Farmeo general", sub: "Más hierbas por sesión", priority: "delicadeza", toolStat: "delicadeza",
          enchants: [{ when: "Recomendado", name: "Delicadeza haranir" }],
          tip: "La cesta ya da <strong>+25 Delicadeza</strong>. Con la herramienta en Delicadeza y el encantamiento haranir, maximizas el volumen de hierbas."
        },
        {
          id: "rare", label: "Materiales raros", sub: "Buscar nodos especiales", priority: "percepcion", toolStat: "percepcion",
          enchants: [{ when: "Recomendado", name: "Percepción amani" }],
          tip: "La capucha ya aporta <strong>+44 Percepción</strong>. Cambia la herramienta a Percepción y usa el encantamiento amani para cazar materiales especiales."
        },
        {
          id: "fast", label: "Recolección rápida", sub: "Menos tiempo por nodo", priority: "destreza", toolStat: "destreza",
          enchants: [{ when: "Recomendado", name: "Destreza sin'dorei" }],
          tip: "La capucha ya da <strong>+44 Destreza</strong>. Si tu prioridad es recolectar rápido, refuerza Destreza en la herramienta."
        }
      ]
    },
    {
      id: "mineria", name: "Minería", emoji: "⛏️", category: "gathering", toolIcon: "⛏️", quickStat: "delicadeza",
      tool: { id: 246534, es: "Piqueta forjada con sol", en: "Sunforged Pickaxe", random: 48 },
      accessories: [
        { id: 259175, es: "Asistente de rocas de alta resistencia", en: "Heavy-Duty Rock Assister", slot: "Espalda", stats: { delicadeza: 45 } },
        { id: 259173, es: "Casco antirrocas", en: "Rock Bonkin' Hardhat", slot: "Cabeza", stats: { destreza: 22, percepcion: 22 } }
      ],
      objectives: [
        {
          id: "general", label: "Farmeo general", sub: "Más mineral por sesión", priority: "delicadeza", toolStat: "delicadeza",
          enchants: [{ when: "Recomendado", name: "Delicadeza haranir" }],
          tip: "El asistente ya da <strong>+45 Delicadeza</strong>. Con la herramienta en Delicadeza y el encantamiento haranir, maximizas el volumen de mineral."
        },
        {
          id: "rare", label: "Minerales raros", sub: "Buscar vetas especiales", priority: "percepcion", toolStat: "percepcion",
          enchants: [{ when: "Recomendado", name: "Percepción amani" }],
          tip: "El casco ya aporta <strong>+22 Percepción</strong>. Cambia la herramienta a Percepción y usa el encantamiento amani para vetas especiales."
        },
        {
          id: "fast", label: "Extracción rápida", sub: "Menos tiempo por nodo", priority: "destreza", toolStat: "destreza",
          enchants: [{ when: "Recomendado", name: "Destreza sin'dorei" }],
          tip: "El casco ya da <strong>+22 Destreza</strong>. Si tu prioridad es extraer rápido, refuerza Destreza en la herramienta."
        }
      ]
    },
    {
      id: "desuello", name: "Desuello", emoji: "🔪", category: "gathering", toolIcon: "🔪", quickStat: "delicadeza",
      tool: { id: 246535, es: "Cuchillo para desollar forjado con sol", en: "Sunforged Skinning Knife", random: 48 },
      accessories: [
        { id: 244808, es: "Bolsa de trabajo de buscaforesta thalassiano", en: "Thalassian Wildseeker's Workbag", slot: "Espalda", stats: { delicadeza: 25 } },
        { id: 244809, es: "Gorro de caminata de buscaforesta thalassiano", en: "Thalassian Wildseeker's Stridercap", slot: "Cabeza", stats: { destreza: 13, percepcion: 13 } }
      ],
      objectives: [
        {
          id: "general", label: "Farmeo general", sub: "Más pieles por sesión", priority: "delicadeza", toolStat: "delicadeza",
          enchants: [{ when: "Recomendado", name: "Delicadeza haranir" }],
          tip: "La bolsa ya da <strong>+25 Delicadeza</strong>. Con la herramienta en Delicadeza y el encantamiento haranir, maximizas el volumen de pieles."
        },
        {
          id: "rare", label: "Pieles especiales", sub: "Bestias majestuosas", priority: "percepcion", toolStat: "percepcion",
          enchants: [{ when: "Recomendado", name: "Percepción amani" }],
          tip: "El gorro ya aporta <strong>+13 Percepción</strong>. Cambia la herramienta a Percepción y usa el encantamiento amani para pieles especiales."
        },
        {
          id: "fast", label: "Farmeo intensivo", sub: "Zonas con muchos enemigos", priority: "destreza", toolStat: "destreza",
          enchants: [{ when: "Recomendado", name: "Destreza sin'dorei" }],
          tip: "El gorro ya da <strong>+13 Destreza</strong>. Si tu prioridad es desollar rápido, refuerza Destreza en la herramienta."
        }
      ]
    },
    {
      id: "cocina", name: "Cocina", emoji: "🍲", category: "secondary", toolIcon: "🥖", quickStat: "inventiva",
      tool: { id: 259207, es: "Rodillo sin'dorei dorado", en: "Gilded Sin'dorei Rolling Pin", stats: { inventiva: 13, speed: 19 } },
      accessories: [
        { id: 267054, es: "Sombrero de chef thalassiano", en: "Thalassian Chef's Chapeau", slot: "Cabeza", stats: { inventiva: 35, speed: 53 } }
      ],
      objectives: [
        {
          id: "mass", label: "Producción masiva", sub: "Cocinar en grandes cantidades", priority: "multicraft", toolStat: null, priorityNote: "vía encantamiento",
          enchants: [{ when: "Recomendado", name: "Fabricación múltiple haranir" }],
          tip: "La herramienta de cocina no usa misiva: ya trae <strong>+13 Inventiva y +19 Velocidad</strong>. El encantamiento Fabricación múltiple haranir añade Multicraft; el sombrero suma +35 Inventiva y +53 Velocidad."
        },
        {
          id: "speed", label: "Lotes rápidos", sub: "Reducir el tiempo de fabricación", priority: "speed", toolStat: null, priorityNote: "stat fijo",
          enchants: [{ when: "Recomendado", name: "Fabricación múltiple haranir" }],
          tip: "La velocidad ya viene en la herramienta y el sombrero: <strong>+72 en total</strong>. Mantén esos accesorios y añade el encantamiento de Multicraft si quieres unidades extra."
        }
      ]
    },
    {
      id: "pesca", name: "Pesca", emoji: "🎣", category: "secondary", toolIcon: "🎣", quickStat: "percepcion",
      tool: { id: 259179, es: "Caña de carreteador sin'dorei", en: "Sin'dorei Reeler's Rod", stats: { percepcion: 56 } },
      accessories: [
        { id: 239638, es: "Gorro de pesca de artesano elegante", en: "Elegant Artisan's Fishing Hat", slot: "Cabeza", stats: { percepcion: 1 } }
      ],
      objectives: [
        {
          id: "volume", label: "Farmeo general / volumen", sub: "Más peces por sesión", priority: "delicadeza", toolStat: null, priorityNote: "vía encantamiento",
          enchants: [{ when: "Recomendado", name: "Delicadeza haranir" }],
          tip: "La caña trae <strong>+56 Percepción fija</strong>; no se puede cambiar. Para orientarte a volumen, usa el encantamiento Delicadeza haranir, la única palanca de Delicadeza en este equipo."
        },
        {
          id: "rare", label: "Peces especiales", sub: "Materiales raros de pesca", priority: "percepcion", toolStat: null, priorityNote: "stat fijo",
          enchants: [{ when: "Opcional", name: "Percepción amani" }],
          tip: "La caña ya da <strong>+56 Percepción</strong> y el gorro +1. Si buscas peces especiales, mantén Percepción y usa Percepción amani como encantamiento opcional."
        }
      ]
    }
  ];

  // Tabla maestra
  const MASTER = [
    { goal: "Fabricar equipo usando Concentración", missive: "inventiva", enchant: "Ingenio ren'dorei" },
    { goal: "Fabricar equipo sin Concentración", missive: "inventiva", enchant: "Inventiva amani" },
    { goal: "Producción masiva de consumibles", missive: "multicraft", enchant: "Fabricación múltiple haranir" },
    { goal: "Producción masiva usando Concentración", missive: "multicraft", enchant: "Ingenio ren'dorei" },
    { goal: "Recolección de materiales comunes", missive: "delicadeza", enchant: "Delicadeza haranir" },
    { goal: "Buscar materiales raros", missive: "percepcion", enchant: "Percepción amani" },
    { goal: "Recolección intensiva y rápida", missive: "destreza", enchant: "Destreza sin'dorei" }
  ];

  // Iconos de ranura
  const SLOT_ICONS = {
    "Cabeza": "🎩",
    "Pecho": "🥼",
    "Manos": "🧤",
    "Espalda": "🎒",
    "Lupa": "🔍",
    "Juego de herramientas": "🧰",
    "Enfoque de encantamientos": "🔮"
  };

  return {
    STATS,
    CATEGORIES,
    PROFESSION_ICONS,
    ITEM_ICONS,
    PROFESSIONS,
    MASTER,
    SLOT_ICONS
  };
})();
