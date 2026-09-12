const courseData = {
  "weeks": [
    {
      "id": "semana1",
      "label": "SEMANA 01",
      "icon": "🧬",
      "colorClass": "week-purple",
      "title": "Cáncer y tratamiento antineoplásico",
      "description": "Comprende las bases moleculares del cáncer, el crecimiento tumoral y los principales fármacos antineoplásicos.",
      "modules": [
        {
          "id": "bases",
          "title": "Bases moleculares del cáncer",
          "description": "Estudia las alteraciones moleculares y genéticas que participan en el origen y desarrollo del cáncer: mutaciones conductoras, protooncogenes y genes supresores de tumores.",
          "topics": [
            "Causas de la aparición del cáncer: daño al ADN y mutaciones conductoras/pasajeras",
            "Activación de protooncogenes: amplificación, translocación e inserción viral",
            "Inactivación de genes supresores de tumor: teoría de los dos eventos de Knudson",
            "Epigenética, pérdida de heterocigosidad y el papel de p53"
          ],
          "sections": [
            {
              "title": "Causas de la Aparición del Cáncer",
              "questions": [
                {
                  "id": 1,
                  "question": "¿Cuál es el evento molecular indispensable para que una célula se convierta en cancerosa?",
                  "options": [
                    "Cualquier daño aislado al ADN",
                    "La selección clonal de mutaciones conductoras que alteran los puntos de control del crecimiento celular",
                    "La presencia de una sola mutación puntual, sin importar cuál",
                    "La pérdida completa del ADN mitocondrial"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 2,
                  "question": "¿Por qué el daño en el ADN, por sí solo, no es suficiente para causar cáncer?",
                  "options": [
                    "Porque el ADN dañado siempre se elimina de la célula",
                    "Porque la mayoría del daño se repara o induce apoptosis de la célula afectada",
                    "Porque el daño al ADN nunca afecta la función celular",
                    "Porque el sistema inmune elimina toda célula con ADN dañado antes de dividirse"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 3,
                  "question": "¿Por qué \"una mutación cualquiera\" no es suficiente para producir cáncer?",
                  "options": [
                    "Porque todas las mutaciones son igual de peligrosas",
                    "Porque muchas mutaciones son pasajeras, es decir, no confieren ventaja alguna a la célula",
                    "Porque las mutaciones solo ocurren en células ya cancerosas",
                    "Porque las mutaciones siempre se corrigen antes de la mitosis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 4,
                  "question": "Según el esquema de tipos de daño al ADN, la exposición a luz UV e hidrocarburos aromáticos policíclicos se asocia principalmente a:",
                  "options": [
                    "Rupturas de doble cadena",
                    "Aductos voluminosos (bulky adducts) / entrecruzamientos intracadena",
                    "Errores de emparejamiento de bases (base mismatch)",
                    "Ninguna alteración del ADN"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 5,
                  "question": "Los radicales de oxígeno, la radiación ionizante y los quimioterapéuticos se asocian principalmente a:",
                  "options": [
                    "Entrecruzamientos entre cadenas (interstrand crosslinks) exclusivamente",
                    "Rupturas de una sola cadena (single-strand break)",
                    "Aductos voluminosos exclusivamente",
                    "Ningún tipo de daño relevante"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 6,
                  "question": "Un hombre de 58 años, trabajador metalúrgico con exposición crónica a hidrocarburos aromáticos y radiación, desarrolla una neoplasia cuyo cariotipo muestra translocaciones, deleciones, amplificaciones y alta inestabilidad cromosómica, sin identificarse una mutación única responsable. ¿Qué concepto ilustra mejor este caso?",
                  "options": [
                    "El cáncer siempre se origina por una sola mutación puntual identificable",
                    "El cáncer resulta de la acumulación progresiva de fallas genéticas y cromosómicas que superan los mecanismos de control celular, no de un daño aislado",
                    "La exposición ocupacional no tiene relación con el desarrollo de cáncer",
                    "La inestabilidad cromosómica descarta el diagnóstico de cáncer"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 7,
                  "question": "En el caso del trabajador metalúrgico, la exposición crónica a hidrocarburos aromáticos, radiación y tabaco actuó probablemente como:",
                  "options": [
                    "Un factor protector frente al desarrollo de mutaciones",
                    "Un conjunto de carcinógenos que indujeron múltiples tipos de daño genético y cromosómico de forma acumulativa a lo largo del tiempo",
                    "La única causa posible de leucocitosis, sin relación con el cariotipo tumoral",
                    "Un factor que solo afecta al sistema respiratorio, sin relación con la médula ósea"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 8,
                  "question": "En el caso de la mujer de 62 años con adenocarcinoma colorrectal, ¿qué mutaciones se comportan como \"conductoras\" (drivers), al estar presentes en todas las regiones del tumor analizadas?",
                  "options": [
                    "Solo las más de 300 mutaciones adicionales",
                    "Las alteraciones en APC y KRAS (junto con TP53)",
                    "Ninguna mutación identificada era conductora",
                    "Únicamente mutaciones en genes mitocondriales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 9,
                  "question": "¿Qué significa que la mayoría de las más de 300 mutaciones adicionales del tumor colorrectal no estén presentes en todas las células tumorales?",
                  "options": [
                    "Que el diagnóstico de cáncer es incorrecto",
                    "Que se trata de mutaciones pasajeras o subclonales, surgidas después del evento fundador, sin conferir una ventaja selectiva uniforme",
                    "Que el tumor no tiene ningún origen clonal",
                    "Que todas esas mutaciones son igual de importantes que APC y KRAS"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 10,
                  "question": "Según la secuencia adenoma-carcinoma del colon, el orden aproximado de alteraciones genéticas conductoras es:",
                  "options": [
                    "TP53 → KRAS → APC",
                    "APC (adenoma pequeño) → KRAS (adenoma grande) → alteraciones en p53/PI3K/TGF-β (carcinoma)",
                    "KRAS → APC → PI3K, en cualquier orden indistintamente",
                    "No existe una secuencia reconocible de alteraciones"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 11,
                  "question": "Si se comparan las edades típicas de los pacientes en cada etapa de la secuencia adenoma-carcinoma (30–50, 40–60, 50–70 años), ¿qué se puede inferir sobre la carcinogénesis colorrectal?",
                  "options": [
                    "Es un evento súbito que ocurre en cuestión de días",
                    "Es un proceso multietapa que se desarrolla a lo largo de décadas, con acumulación progresiva de alteraciones genéticas",
                    "Todas las etapas ocurren simultáneamente en la misma edad",
                    "La edad del paciente no tiene relación con la progresión tumoral"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 12,
                  "question": "Según el esquema de progresión del cáncer, las mutaciones \"conductoras\" (driver mutations) se caracterizan por conferir:",
                  "options": [
                    "Ninguna ventaja selectiva a la célula",
                    "Ventaja de crecimiento, pérdida de fidelidad del ADN y capacidad de metastatizar",
                    "Únicamente resistencia a la radioterapia",
                    "Solo cambios en la morfología nuclear, sin efecto funcional"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 13,
                  "question": "Si un paciente nace con un síndrome de cáncer hereditario (como se señala en el esquema de \"Cancer Progression\"), ¿qué implica esto para su riesgo y velocidad de desarrollo tumoral?",
                  "options": [
                    "No tiene ningún efecto sobre el riesgo de cáncer",
                    "Ya porta una mutación conductora (o predisposición) desde el nacimiento, por lo que requiere menos eventos adicionales para desarrollar cáncer, acelerando su aparición",
                    "Significa que nunca desarrollará cáncer, ya que está \"vacunado\" genéticamente",
                    "Implica que solo los carcinógenos ambientales pueden causarle cáncer, no las mutaciones heredadas"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Protooncogenes: Activación y Ejemplos",
              "questions": [
                {
                  "id": 14,
                  "question": "¿Cuál es la diferencia funcional clave entre un oncogén y un gen supresor de tumor?",
                  "options": [
                    "Ambos términos son sinónimos",
                    "El oncogén promueve el cáncer mediante mutaciones activadoras (dominante); el supresor de tumor protege contra el cáncer y se inactiva mediante mutaciones (recesivo)",
                    "El oncogén siempre se hereda, mientras que el supresor de tumor nunca se hereda",
                    "El supresor de tumor solo actúa en células germinales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 15,
                  "question": "Una mujer de 47 años con carcinoma ductal invasivo presenta amplificación de HER2, pérdida de una proteína reguladora del ciclo celular, activación constitutiva de vías proliferativas y menor capacidad de detener el ciclo ante daño al ADN, sin una mutación única identificada. ¿Qué principio general ilustra este caso?",
                  "options": [
                    "Todo cáncer se debe a una sola mutación causal",
                    "El cáncer resulta de la combinación de alteraciones funcionales en protooncogenes y genes supresores de tumor, no de un evento único",
                    "La amplificación de HER2 no tiene relación con el control del ciclo celular",
                    "Este caso descarta la participación de protooncogenes en el cáncer de mama"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 16,
                  "question": "Según el esquema de \"Activación de protooncogenes: causas\", los mecanismos principales incluyen:",
                  "options": [
                    "Solo la mutación puntual",
                    "Mutación/deleción, duplicación génica (amplificación) y translocación/reordenamiento (con o sin formación de gen de fusión)",
                    "Únicamente la inserción viral",
                    "Solo cambios epigenéticos, sin alteraciones estructurales del ADN"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 17,
                  "question": "La amplificación del gen HER2 en cáncer de mama corresponde a qué mecanismo de activación de protooncogenes?",
                  "options": [
                    "Translocación cromosómica",
                    "Amplificación del ADN: producción de múltiples copias de una secuencia génica",
                    "Inserción de un provirus",
                    "Mutación puntual inactivadora"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 18,
                  "question": "En la translocación t(9;22) que forma el cromosoma Filadelfia, ¿por qué ni el gen ABL ni el gen BCR causan cáncer por separado, pero sí lo hace el gen de fusión BCR-ABL resultante?",
                  "options": [
                    "Porque ABL y BCR se destruyen mutuamente al fusionarse",
                    "Porque la fusión genera una proteína con actividad tirosina cinasa desregulada, fuera del control normal, que promueve la proliferación descontrolada",
                    "Porque BCR-ABL es un gen supresor de tumor inactivado",
                    "Porque la fusión ocurre únicamente en células germinales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 19,
                  "question": "La translocación t(9;22) / cromosoma Filadelfia se asocia específicamente a:",
                  "options": [
                    "Cáncer de mama",
                    "Leucemia mieloide crónica",
                    "Retinoblastoma",
                    "Cáncer colorrectal"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 20,
                  "question": "Si un retrovirus se inserta cerca de un protooncogén e introduce un promotor viral fuerte, ¿qué consecuencia molecular es más probable?",
                  "options": [
                    "Silenciamiento completo del protooncogén",
                    "Sobreexpresión del protooncogén adyacente, impulsada por el promotor viral",
                    "Ninguna consecuencia sobre la expresión génica",
                    "Eliminación total del provirus por el sistema inmune"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 21,
                  "question": "Según la tabla de virus asociados a cáncer, el virus del papiloma humano (VPH) se asocia principalmente a:",
                  "options": [
                    "Cáncer de hígado",
                    "Carcinoma cervical",
                    "Linfoma de Burkitt",
                    "Sarcoma de Kaposi"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 22,
                  "question": "Según la misma tabla, los virus de hepatitis B y hepatitis C se asocian principalmente a:",
                  "options": [
                    "Leucemia de células T del adulto",
                    "Cáncer de hígado",
                    "Carcinoma de células de Merkel",
                    "Carcinoma nasofaríngeo"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 23,
                  "question": "El gen E6 del VPH inactiva a la proteína p53. ¿Qué consecuencia tiene esto sobre el riesgo de cáncer cervical?",
                  "options": [
                    "Aumenta la capacidad de la célula para reparar el ADN dañado",
                    "Se pierde la capacidad de detener el ciclo celular o inducir apoptosis ante el daño al ADN, favoreciendo la acumulación de mutaciones adicionales",
                    "No tiene ninguna relación con el desarrollo de cáncer cervical",
                    "Convierte directamente a p53 en un oncogén activador"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 24,
                  "question": "El protooncogén c-myc actúa normalmente como:",
                  "options": [
                    "Una tirosina cinasa de membrana exclusivamente",
                    "Un factor de transcripción que regula el ciclo celular, la diferenciación y la apoptosis",
                    "Una proteína estructural del citoesqueleto",
                    "Un gen supresor de tumor recesivo"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 25,
                  "question": "Comparando la activación de protooncogenes por amplificación y por translocación, ¿qué tienen en común ambos mecanismos en su consecuencia final?",
                  "options": [
                    "Ambos inactivan completamente al protooncogén",
                    "Ambos llevan a un aumento o alteración de la producción/actividad de la proteína codificada, favoreciendo la proliferación descontrolada",
                    "Ninguno de los dos afecta la expresión génica",
                    "Ambos ocurren exclusivamente en la línea germinal"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 26,
                  "question": "Un paciente con leucemia promielocítica aguda presenta una translocación que fusiona el gen RARα con el gen PML. ¿Qué mecanismo de activación de protooncogenes ilustra este caso?",
                  "options": [
                    "Amplificación génica",
                    "Translocación con formación de un gen de fusión que altera la vía de diferenciación celular dependiente de hormonas/retinoides",
                    "Inserción viral",
                    "Pérdida de heterocigosidad"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Genes Supresores de Tumores, Epigenética y p53",
              "questions": [
                {
                  "id": 27,
                  "question": "Las mutaciones en los genes supresores de tumor son, típicamente, de tipo:",
                  "options": [
                    "Dominante, con una sola copia mutada suficiente para inactivar la función",
                    "Recesivo, por lo que se requiere la inactivación de ambas copias (alelos) para perder la función",
                    "Mitocondrial exclusivamente",
                    "Ligadas al cromosoma Y exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 28,
                  "question": "Un niño de 18 meses presenta retinoblastoma bilateral de crecimiento rápido, con antecedente de que su padre tuvo enucleación ocular en la infancia por la misma enfermedad. ¿Qué forma de la enfermedad representa este caso?",
                  "options": [
                    "Forma esporádica",
                    "Forma hereditaria: nace con una copia alterada del gen RB en todas sus células y solo requiere un segundo evento somático para perder la función completamente",
                    "Una forma no genética, adquirida por infección viral",
                    "Un caso sin relación con el gen RB"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 29,
                  "question": "Una niña de 5 años presenta retinoblastoma unilateral sin antecedentes familiares. ¿Qué forma de la enfermedad representa este caso?",
                  "options": [
                    "Forma esporádica: nace con ambas copias funcionales del gen RB y requiere dos eventos somáticos independientes en la misma célula",
                    "Forma hereditaria idéntica al caso anterior",
                    "Un caso que descarta la participación del gen RB",
                    "Una forma que siempre se presenta de manera bilateral"
                  ],
                  "correct": 0,
                  "explanation": ""
                },
                {
                  "id": 30,
                  "question": "¿Por qué la forma hereditaria del retinoblastoma tiende a presentarse más tempranamente y con mayor frecuencia de tumores bilaterales que la forma esporádica?",
                  "options": [
                    "Porque el gen RB no está involucrado en la forma hereditaria",
                    "Porque solo se necesita un segundo evento somático (en lugar de dos) para inactivar completamente el gen RB en cualquier célula de la retina, lo que aumenta la probabilidad y adelanta la aparición en ambos ojos",
                    "Porque la forma hereditaria nunca compromete ambos ojos",
                    "Porque la forma esporádica siempre aparece antes que la hereditaria"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 31,
                  "question": "El gen RB, implicado en el retinoblastoma, se localiza en la región cromosómica:",
                  "options": [
                    "9q34",
                    "13q14",
                    "22q11",
                    "17p13"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 32,
                  "question": "Según el mecanismo RB-E2F, ¿qué ocurre si una mutación cancerígena elimina la función de la proteína RB?",
                  "options": [
                    "E2F queda inactivo de forma permanente, deteniendo la proliferación",
                    "E2F permanece en estado activo de forma constitutiva, promoviendo la transcripción de genes que impulsan la proliferación celular descontrolada",
                    "La célula entra en apoptosis inmediata",
                    "No hay ningún efecto sobre la transcripción génica"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 33,
                  "question": "¿Qué se entiende por \"pérdida de heterocigosidad\" (LOH) en el contexto de los genes supresores de tumor?",
                  "options": [
                    "La duplicación de ambos alelos funcionales de un gen supresor",
                    "La pérdida del alelo funcional (silvestre) en una persona heterocigota para un gen supresor de tumor, quedando solo la copia mutada/no funcional",
                    "Un fenómeno que ocurre únicamente en genes mitocondriales",
                    "La activación simultánea de ambos alelos de un oncogén"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 34,
                  "question": "Un hombre de 52 años con adenocarcinoma de colon presenta, en el estudio genético del tumor, una copia mutada de un gen supresor de tumor y una segunda copia sin mutaciones en su secuencia de ADN, pero cuya proteína no se expresa. ¿Qué mecanismo explica mejor este hallazgo?",
                  "options": [
                    "Un error técnico en el estudio genético, sin explicación biológica",
                    "Una \"epimutación\": hipermetilación del promotor de la copia aparentemente normal, que silencia su expresión sin alterar la secuencia de ADN",
                    "La presencia de un oncogén dominante que anula al supresor de tumor",
                    "La ausencia total del gen supresor en el genoma del paciente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 35,
                  "question": "Integrando el esquema de \"primer y segundo evento\" (mutación genética vs. epimutación), ¿qué conclusión se puede extraer sobre la inactivación completa de un gen supresor de tumor?",
                  "options": [
                    "Solo puede inactivarse mediante dos mutaciones genéticas clásicas",
                    "Puede inactivarse mediante dos mutaciones genéticas, o mediante la combinación de una mutación genética y una epimutación (o incluso dos epimutaciones), ya que ambas vías silencian la función del gen",
                    "La epimutación nunca contribuye a la inactivación de un gen supresor",
                    "Un gen supresor de tumor no puede inactivarse por mecanismos epigenéticos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 36,
                  "question": "¿Qué gen supresor de tumor se asocia al síndrome de Li-Fraumeni y es descrito como \"guardián del genoma\"?",
                  "options": [
                    "APC",
                    "TP53",
                    "RB",
                    "VHL"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 37,
                  "question": "Ante daño al ADN, hipoxia, deficiencia de nutrientes o estrés oxidativo, la activación de p53 conduce a funciones como:",
                  "options": [
                    "Únicamente la promoción de la proliferación celular",
                    "Detención del ciclo celular, reparación del ADN, senescencia, apoptosis y mantenimiento de la estabilidad genómica",
                    "Solo la inducción de angiogénesis",
                    "Exclusivamente la activación de protooncogenes"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 38,
                  "question": "Si una célula presenta una mutación que inactiva a p53, ¿qué consecuencia tiene esto sobre su respuesta al daño del ADN?",
                  "options": [
                    "La célula repara su ADN con mayor eficiencia",
                    "Pierde la capacidad de detener el ciclo celular, reparar el ADN o inducir apoptosis/senescencia ante el daño, permitiendo que células dañadas sobrevivan y acumulen más mutaciones",
                    "La célula entra en apoptosis de forma inmediata y automática",
                    "No hay ningún cambio, ya que p53 no participa en la respuesta al daño del ADN"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 39,
                  "question": "¿Qué gen supresor de tumor se asocia a la poliposis adenomatosa familiar y actúa uniéndose a la beta-catenina como factor de transcripción?",
                  "options": [
                    "BRCA1",
                    "APC",
                    "PTEN",
                    "NF1"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 40,
                  "question": "Integrando el resumen general del documento, ¿por qué se afirma que el cáncer es de origen \"clonal\" y de desarrollo \"multietapa\"?",
                  "options": [
                    "Porque todas las células del cuerpo desarrollan cáncer simultáneamente",
                    "Porque se origina a partir de una única célula que adquiere una mutación inicial (evento fundador) y progresa mediante la acumulación secuencial de mutaciones adicionales en protooncogenes y supresores de tumor, pasando de un crecimiento benigno a uno invasivo y metastásico",
                    "Porque cada célula tumoral surge de manera independiente y sin relación clonal entre sí",
                    "Porque el cáncer siempre aparece en una sola etapa, sin progresión"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            }
          ]
        },
        {
          "id": "crecimiento",
          "title": "Biología del crecimiento tumoral",
          "description": "Comprende cómo las células tumorales proliferan, sobreviven, invaden tejidos y pueden producir metástasis.",
          "topics": [
            "La célula neoplásica: inmortalidad, morfología y funciones alteradas",
            "Fases del desarrollo tumoral: iniciación, promoción, transformación y progresión",
            "Cinética tumoral, fracción de crecimiento y factores angiogénicos",
            "Invasión, metástasis e integración con casos clínicos"
          ],
          "sections": [
            {
              "title": "Introducción y la Célula Neoplásica",
              "questions": [
                {
                  "id": 41,
                  "question": "Según los objetivos del curso, entender la carcinogénesis sirve como base racional para:",
                  "options": [
                    "Únicamente el diagnóstico por imágenes",
                    "La prevención o el tratamiento de las enfermedades neoplásicas",
                    "El cálculo de dosis de radioterapia exclusivamente",
                    "La clasificación histológica exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 42,
                  "question": "En la célula normal, el \"control\" mencionado regula tres procesos:",
                  "options": [
                    "Migración, adhesión y secreción",
                    "Proliferación, diferenciación y muerte celular",
                    "Transcripción, traducción y replicación",
                    "Endocitosis, exocitosis y fagocitosis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 43,
                  "question": "La \"inmortalidad\" de la célula neoplásica se explica por:",
                  "options": [
                    "Aumento de la diferenciación y aumento de la apoptosis",
                    "Aumento de los genes que promueven la división celular y disminución de la apoptosis",
                    "Disminución de la proliferación celular",
                    "Pérdida total de la capacidad de dividirse"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 44,
                  "question": "Entre los cambios de \"morfología alterada\" de la célula neoplásica se incluyen:",
                  "options": [
                    "Hipoploidia y núcleos hipocromáticos",
                    "Poliploidia, hipercromatismo y mitosis atípicas",
                    "Ausencia total de núcleo",
                    "Reducción del tamaño celular únicamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 45,
                  "question": "Dentro de las \"funciones alteradas\" de la célula neoplásica, las proteínas oncogénicas pueden presentar:",
                  "options": [
                    "Solo disminución de su expresión",
                    "Sobreexpresión, funciones alteradas y reconocimiento por el sistema inmune (como antígenos tumorales)",
                    "Nula relación con el sistema inmune",
                    "Solo alteraciones en la membrana celular, sin relación con proteínas"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Fases del Desarrollo Tumoral (Carcinogénesis)",
              "questions": [
                {
                  "id": 46,
                  "question": "Las cuatro fases clásicas de la carcinogénesis, en orden, son:",
                  "options": [
                    "Promoción, Iniciación, Progresión, Transformación",
                    "Iniciación, Promoción, Transformación, Progresión",
                    "Transformación, Iniciación, Metástasis, Promoción",
                    "Iniciación, Transformación, Promoción, Angiogénesis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 47,
                  "question": "La fase de \"Iniciación\" se caracteriza por:",
                  "options": [
                    "Hiperplasia visible microscópicamente",
                    "Una mutación genética con cambios nucleares no visibles",
                    "Invasión de la membrana basal",
                    "Metástasis a distancia"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 48,
                  "question": "La fase de \"Promoción\" se caracteriza principalmente por:",
                  "options": [
                    "Carcinoma in situ",
                    "Función celular alterada, división celular e hiperplasia",
                    "Angiogénesis y metástasis",
                    "Mutación inicial sin cambios funcionales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 49,
                  "question": "La fase de \"Transformación\" en el desarrollo tumoral se asocia a:",
                  "options": [
                    "Angiogénesis exclusivamente",
                    "Displasia y carcinoma in situ",
                    "Metástasis a distancia",
                    "Hiperplasia simple sin atipia"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 50,
                  "question": "En la carcinogénesis del esófago de Barrett, la secuencia descrita es:",
                  "options": [
                    "Cáncer → Displasia → Metaplasia",
                    "Metaplasia → Displasia → Cáncer",
                    "Displasia → Metaplasia → Cáncer",
                    "Metaplasia → Cáncer → Displasia"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Cinética Tumoral, Factores de Crecimiento y Metástasis",
              "questions": [
                {
                  "id": 51,
                  "question": "Según la cinética tumoral, una masa tumoral clínicamente detectable (~1 g, 10⁹ células) requiere aproximadamente:",
                  "options": [
                    "5 duplicaciones celulares",
                    "30 duplicaciones celulares",
                    "100 duplicaciones celulares",
                    "3 duplicaciones celulares"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 52,
                  "question": "La \"fracción de crecimiento tumoral\" describe la proporción de células tumorales que se encuentran en:",
                  "options": [
                    "Apoptosis exclusivamente",
                    "El pool proliferativo, en contraste con las del pool no proliferativo (G0, diferenciación, muerte)",
                    "Diferenciación terminal únicamente",
                    "Necrosis exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 53,
                  "question": "La angiogénesis tumoral es impulsada principalmente por la sobreexpresión de señales pro-angiogénicas como:",
                  "options": [
                    "El factor de necrosis tumoral (TNF)",
                    "El VEGF",
                    "La insulina",
                    "El colágeno tipo IV"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 54,
                  "question": "Respecto a los estrógenos como factores de crecimiento, el documento señala que:",
                  "options": [
                    "Inhiben al FCT-α y estimulan al FCT-β",
                    "El FCT-α actúa como mitógeno y los estrógenos inhiben al FCT-β",
                    "No tienen relación con los factores de crecimiento tumoral",
                    "Son antagonizados únicamente por la angiogénesis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 55,
                  "question": "En la cascada metastásica, después de la adhesión e invasión de la membrana basal y el paso por la matriz extracelular, la célula tumoral debe:",
                  "options": [
                    "Diferenciarse terminalmente",
                    "Ingresar al torrente sanguíneo (intravasación) y sobrevivir a la interacción con células linfoides del huésped",
                    "Entrar directamente en apoptosis",
                    "Perder su capacidad de proliferar"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 56,
                  "question": "Si una célula pierde la función del gen supresor p53, ¿qué efecto se puede predecir sobre su comportamiento según los conceptos de célula normal vs. neoplásica?",
                  "options": [
                    "Aumentará la apoptosis en respuesta al daño del ADN",
                    "Disminuirá su capacidad de eliminar células dañadas por apoptosis, favoreciendo la acumulación de mutaciones y la proliferación descontrolada",
                    "La célula perderá completamente su capacidad de proliferar",
                    "No tiene ningún efecto sobre el ciclo celular"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 57,
                  "question": "Un tumor mantiene su crecimiento a pesar de señales externas que normalmente lo inhibirían. Según el esquema de \"Hallmarks of Cancer\", esto corresponde a:",
                  "options": [
                    "Angiogénesis inducida",
                    "Evasión de los supresores del crecimiento (evading growth suppressors)",
                    "Inestabilidad genómica",
                    "Activación de la invasión y metástasis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 58,
                  "question": "Si el estímulo promotor se retira tempranamente durante la fase de \"Promoción\" (antes de la transformación), ¿qué se podría predecir sobre la progresión tumoral?",
                  "options": [
                    "El proceso de carcinogénesis continuará de forma irreversible",
                    "La progresión hacia la transformación podría detenerse o revertirse parcialmente, ya que la promoción aún no ha generado un fenotipo maligno fijo",
                    "El tumor pasará directamente a metástasis",
                    "No hay ninguna relación entre la retirada del promotor y la progresión"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 59,
                  "question": "Una célula tumoral que sobreexpresa telomerasa (complejo catalítico de telomerasa) se relaciona directamente con qué \"Hallmark\" del cáncer?",
                  "options": [
                    "Reprogramación del metabolismo energético",
                    "Inmortalidad replicativa (enabling replicative immortality)",
                    "Evasión de la destrucción inmune",
                    "Inflamación promotora de tumor"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 60,
                  "question": "Un tumor pequeño de 1-2 mm es descrito como \"avascular y latente\". Si este tumor activa señales pro-angiogénicas como el VEGF, ¿qué se puede predecir sobre su comportamiento clínico?",
                  "options": [
                    "Se mantendrá latente indefinidamente sin cambios",
                    "Se volverá un tumor vascularizado con mayor potencial de crecimiento y metástasis (interruptor angiogénico)",
                    "Disminuirá su tamaño espontáneamente",
                    "Perderá su capacidad de proliferar"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 61,
                  "question": "Comparando un leiomioma (benigno) con un leiomiosarcoma (maligno) según el esquema uterino del documento, ¿qué característica predice mejor la malignidad?",
                  "options": [
                    "Tamaño pequeño y crecimiento lento exclusivamente",
                    "Bordes mal delimitados, crecimiento rápido con hemorragia/necrosis, y potencial metastásico",
                    "Ausencia total de vascularización",
                    "Buena diferenciación histológica exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 62,
                  "question": "Según el diagrama de \"fracción de crecimiento tumoral\" (pool proliferativo vs. no proliferativo), ¿qué tipo de tumor respondería mejor a quimioterapia ciclo-celular específica?",
                  "options": [
                    "Un tumor con una fracción de crecimiento predominantemente en G0 (no proliferativo)",
                    "Un tumor con una fracción de crecimiento alta, es decir, con muchas células activamente en división",
                    "Un tumor completamente diferenciado sin células en división",
                    "La fracción de crecimiento no influye en la respuesta a quimioterapia"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 63,
                  "question": "Si un tumor requiere aproximadamente 30 duplicaciones para alcanzar 1 g (masa clínicamente detectable) y otras 10 duplicaciones adicionales para llegar a 1 kg (masa máxima compatible con la vida), ¿qué se puede inferir sobre el momento de la detección clínica?",
                  "options": [
                    "El tumor se detecta clínicamente en sus primeras divisiones celulares",
                    "Para cuando el tumor es clínicamente detectable, ya ha atravesado la mayor parte de su historia biológica de duplicaciones, y puede ya tener micrometástasis",
                    "El diagnóstico clínico siempre ocurre antes de cualquier posibilidad de metástasis",
                    "La cantidad de duplicaciones no tiene relación con el riesgo de metástasis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 64,
                  "question": "Un paciente con reflujo gastroesofágico crónico desarrolla metaplasia de Barrett. Según la secuencia de carcinogénesis descrita, ¿qué se puede predecir si la exposición al reflujo persiste sin tratamiento?",
                  "options": [
                    "La metaplasia siempre revierte espontáneamente sin riesgo",
                    "Existe riesgo de progresión hacia displasia y eventualmente cáncer, por acumulación de señales de prosupervivencia y antimuerte",
                    "La metaplasia es un hallazgo sin ninguna relevancia clínica",
                    "El paciente desarrollará automáticamente cáncer en semanas"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 65,
                  "question": "En el modelo de carcinogénesis cutánea inducida por UV (mutaciones de p53 y ras), ¿qué se puede predecir si el paciente evita la exposición solar en la etapa de \"clona premaligna\"?",
                  "options": [
                    "No habrá ningún efecto, el daño ya es irreversible en esa etapa",
                    "Se podría reducir el riesgo de una segunda mutación de p53 u otras mutaciones inducidas por UV que llevarían a carcinoma invasivo",
                    "La clona premaligna siempre progresa a cáncer sin importar la exposición posterior",
                    "La exposición solar posterior no influye en la progresión descrita en el esquema"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 66,
                  "question": "Un paciente con reflujo gastroesofágico crónico de larga data es diagnosticado con esófago de Barrett en una endoscopia. ¿Qué conducta se integra lógicamente con la secuencia de carcinogénesis descrita?",
                  "options": [
                    "No requiere seguimiento, ya que la metaplasia nunca progresa",
                    "Debe mantenerse en vigilancia endoscópica periódica, dado el riesgo de progresión a displasia y adenocarcinoma",
                    "Debe indicarse quimioterapia de inmediato, sin necesidad de biopsias",
                    "El hallazgo es irrelevante si el paciente no tiene síntomas actuales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 67,
                  "question": "Una paciente con citología cervical que reporta CIN III (displasia severa/carcinoma in situ) pregunta si esto significa que ya tiene cáncer invasor. ¿Cuál es la explicación correcta según las fases del desarrollo tumoral?",
                  "options": [
                    "Sí, CIN III es sinónimo de cáncer invasor con metástasis",
                    "No necesariamente; CIN III corresponde a una fase de transformación avanzada (displasia severa/carcinoma in situ), previa a la invasión de la membrana basal, por lo que es potencialmente curable con tratamiento oportuno",
                    "CIN III es un hallazgo completamente benigno sin ningún riesgo",
                    "CIN III solo se relaciona con infecciones y no con el proceso de carcinogénesis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 68,
                  "question": "En una biopsia se reporta pérdida de heterocigosidad (LOH) de un gen supresor de tumores en el tejido de un paciente con una lesión premaligna. ¿Qué implicancia clínica tiene este hallazgo, integrando el concepto de acumulación de mutaciones?",
                  "options": [
                    "No tiene ninguna relevancia pronóstica",
                    "Sugiere una mayor inestabilidad genética y un paso adicional hacia la progresión maligna, lo que podría justificar un seguimiento más estrecho",
                    "Indica que la lesión es definitivamente benigna y no requiere seguimiento",
                    "Implica que el paciente ya tiene metástasis a distancia"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 69,
                  "question": "Se detecta incidentalmente un nódulo pulmonar de 1-2 mm, descrito como avascular en estudios de imagen. Integrando el concepto del \"interruptor angiogénico\", ¿qué se puede afirmar sobre su comportamiento futuro?",
                  "options": [
                    "Al ser avascular, nunca podrá progresar ni cambiar su comportamiento",
                    "Mientras se mantenga avascular y latente el riesgo de progresión es bajo, pero si activa señales pro-angiogénicas (p. ej. VEGF) podría volverse un tumor vascularizado con mayor potencial de crecimiento, por lo que amerita seguimiento",
                    "El nódulo ya es necesariamente metastásico",
                    "La vascularización no tiene relación con el pronóstico del nódulo"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 70,
                  "question": "Una biopsia de mama muestra progresión desde hiperplasia atípica hacia carcinoma ductal in situ. ¿Qué integración de conceptos explica mejor la conducta clínica a seguir?",
                  "options": [
                    "La hiperplasia atípica es un hallazgo normal que no requiere ninguna acción",
                    "Representa un paso en la acumulación de cambios genéticos/epigenéticos hacia el cáncer invasor, por lo que requiere seguimiento estrecho y posible intervención antes de la invasión tisular",
                    "El carcinoma ductal in situ ya implica metástasis a distancia confirmada",
                    "No existe relación biológica entre la hiperplasia atípica y el carcinoma in situ"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 71,
                  "question": "Un paciente con cáncer de próstata metastásico, inicialmente sensible a la terapia de deprivación androgénica, presenta progresión con mutaciones del receptor de andrógenos. ¿Cómo se interpreta clínicamente este escenario?",
                  "options": [
                    "El paciente se ha curado de la enfermedad",
                    "El tumor ha progresado hacia un cáncer de próstata independiente de andrógenos (resistencia a la castración), lo que requiere un cambio de estrategia terapéutica",
                    "El hallazgo no tiene ninguna relación con la progresión de la enfermedad",
                    "Significa que debe aumentarse simplemente la dosis del mismo agonista de GnRH"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 72,
                  "question": "Un paciente es diagnosticado con metástasis hepáticas de origen desconocido, sin poder identificarse un tumor primario mayor a 1 cm en los estudios de imagen. Integrando el concepto de cinética tumoral, ¿cómo se explica este escenario?",
                  "options": [
                    "Es imposible que exista metástasis sin un tumor primario detectable",
                    "El tumor primario pudo haber generado metástasis microscópicas tempranamente durante su historia de duplicaciones celulares, antes de alcanzar un tamaño clínicamente detectable",
                    "Las metástasis siempre aparecen después de que el tumor primario sea visible en imágenes",
                    "Este escenario contradice completamente los modelos de crecimiento tumoral descritos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 73,
                  "question": "Un tumor sólido muestra alta heterogeneidad genética con múltiples subclones (algunos resistentes a terapia, otros no). Si se trata con un único fármaco dirigido a una sola alteración molecular, ¿qué se puede predecir?",
                  "options": [
                    "Todas las células tumorales responderán de forma idéntica y homogénea",
                    "Es probable que los subclones no sensibles a ese blanco molecular sobrevivan y proliferen, generando recaída o resistencia terapéutica",
                    "La heterogeneidad tumoral no influye en la respuesta al tratamiento",
                    "El tumor desaparecerá por completo sin posibilidad de recaída"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 74,
                  "question": "Un tumor exhibe el \"Hallmark\" de evasión de la destrucción inmune. ¿Qué estrategia terapéutica se integra lógicamente con este mecanismo?",
                  "options": [
                    "Radioterapia exclusivamente, sin relación con el sistema inmune",
                    "Inmunoterapia dirigida a restaurar el reconocimiento y ataque del sistema inmune contra el tumor (p. ej. inhibidores del control inmune/checkpoint inhibitors)",
                    "Terapia hormonal exclusivamente",
                    "No existe ninguna estrategia terapéutica relacionada con este mecanismo"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 75,
                  "question": "En una paciente con una masa uterina, la biopsia muestra bordes mal delimitados, crecimiento rápido con hemorragia y necrosis. Integrando los criterios de benignidad/malignidad descritos, ¿cuál es la interpretación más adecuada y la conducta consecuente?",
                  "options": [
                    "Corresponde a un leiomioma típico y no requiere más estudio",
                    "Los hallazgos son sugestivos de malignidad (leiomiosarcoma), por lo que se requiere estudio histopatológico completo y estadificación",
                    "Estos hallazgos son irrelevantes para diferenciar benignidad de malignidad",
                    "Debe manejarse igual que cualquier masa benigna, sin necesidad de biopsia"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            }
          ]
        },
        {
          "id": "antineoplasticos",
          "title": "Antineoplásicos",
          "description": "Revisa la clasificación, los mecanismos de acción y los principales efectos adversos de los fármacos antineoplásicos, desde citotóxicos clásicos hasta terapias dirigidas.",
          "topics": [
            "Clasificación de antineoplásicos por mecanismo de acción",
            "Antimetabolitos, alquilantes, antimitóticos e inhibidores de topoisomerasas",
            "Hormonoterapia, anticuerpos monoclonales e inhibidores enzimáticos dirigidos",
            "Toxicidad, resistencia y aplicación clínica de los esquemas de quimioterapia"
          ],
          "sections": [
            {
              "title": "Módulo 1: Introducción y Generalidades",
              "questions": [
                {
                  "id": 76,
                  "question": "¿Cuáles son los cinco ejes con los que se organiza el estudio de los antineoplásicos en la introducción?",
                  "options": [
                    "Diagnóstico, Estadificación, Cirugía, Radioterapia, Pronóstico",
                    "Aspectos, Ciclo Celular, Mecanismos, Resistencia, RAM",
                    "Farmacocinética, Farmacodinamia, Toxicidad, Interacciones, Dosis",
                    "Prevención, Cribado, Tratamiento, Seguimiento, Paliación"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 77,
                  "question": "Los agentes citotóxicos actúan principalmente sobre células que comparten con las cancerosas:",
                  "options": [
                    "Baja tasa de división",
                    "Ausencia de núcleo",
                    "Alta tasa de proliferación/crecimiento acelerado",
                    "Resistencia a la apoptosis únicamente"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 78,
                  "question": "Según la diapositiva introductoria, ¿cuáles son efectos secundarios típicos de los citotóxicos?",
                  "options": [
                    "Hipertensión y taquicardia exclusivamente",
                    "Pérdida de cabello, náuseas, vómitos e inflamación de mucosas",
                    "Hipoglucemia y bradicardia",
                    "Solo alteraciones visuales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 79,
                  "question": "¿Qué diferencia principal hay entre \"agentes citotóxicos\" y \"anticuerpos/inhibidores enzimáticos/hormonas\"?",
                  "options": [
                    "No hay diferencia, son sinónimos",
                    "Los citotóxicos solo se usan en leucemias",
                    "Los citotóxicos afectan células en división en general; los segundos se dirigen a blancos moleculares específicos",
                    "Los anticuerpos siempre son más tóxicos"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 80,
                  "question": "¿Cómo actúan, en términos generales, los anticuerpos monoclonales según la introducción?",
                  "options": [
                    "Interfieren con la síntesis de ADN de forma inespecífica",
                    "Se dirigen a proteínas específicas en células cancerosas y bloquean su crecimiento",
                    "Inhiben directamente la mitosis en todas las células",
                    "Solo actúan como transportadores de quimioterapia"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 81,
                  "question": "¿Cómo interfieren los inhibidores enzimáticos con la proliferación cancerosa?",
                  "options": [
                    "Bloqueando la absorción intestinal de nutrientes",
                    "Interfiriendo con señales/funciones esenciales para la proliferación celular cancerosa",
                    "Uniéndose de forma inespecífica al ADN",
                    "Aumentando la replicación celular sana"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 82,
                  "question": "¿Qué texto se recomienda para revisar mecanismos de acción, usos y efectos adversos de los antineoplásicos?",
                  "options": [
                    "Harrison's Principles of Internal Medicine",
                    "Goodman y Gilman",
                    "Robbins Patología",
                    "Katzung Farmacología Básica y Clínica exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 83,
                  "question": "¿Qué disciplina se recomienda repasar antes de iniciar el tema de antineoplásicos?",
                  "options": [
                    "Bioestadística",
                    "Biología Molecular y Celular (ciclo celular eucariota)",
                    "Microbiología",
                    "Anatomía patológica exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 84,
                  "question": "La curva de dosis-respuesta en quimioterapia citotóxica sirve principalmente para:",
                  "options": [
                    "Determinar el color del fármaco",
                    "Relacionar la dosis administrada con el efecto/toxicidad esperado",
                    "Calcular únicamente el costo del tratamiento",
                    "Definir la vía de administración"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 85,
                  "question": "¿Por qué es relevante conocer a los \"pioneros de la quimioterapia\"?",
                  "options": [
                    "Es un dato anecdótico sin relevancia clínica",
                    "Ayuda a entender el origen histórico y racional de las clases de fármacos actuales",
                    "Porque todos los fármacos actuales llevan su nombre",
                    "Porque determina la dosis máxima tolerada"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 2: Antimetabolitos",
              "questions": [
                {
                  "id": 86,
                  "question": "Un antimetabolito ejerce su efecto antitumoral porque:",
                  "options": [
                    "Corta directamente ambas cadenas del ADN",
                    "Imita a un metabolito normal e interfiere con la síntesis de ácidos nucleicos",
                    "Se une a los microtúbulos",
                    "Inhibe la topoisomerasa II exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 87,
                  "question": "Las tres grandes familias de antimetabolitos son análogos de:",
                  "options": [
                    "Aminoácidos, lípidos y vitaminas",
                    "Ácido fólico, purinas y pirimidinas",
                    "Esteroides, purinas y proteínas",
                    "ADN, ARN y ribosomas"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 88,
                  "question": "La azatioprina es un profármaco de:",
                  "options": [
                    "Metotrexato",
                    "5-fluorouracilo",
                    "6-mercaptopurina",
                    "Gemcitabina"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 89,
                  "question": "¿Por qué debe reducirse la dosis de 6-mercaptopurina/azatioprina si el paciente recibe alopurinol?",
                  "options": [
                    "Porque el alopurinol la inactiva completamente",
                    "Porque el alopurinol inhibe la xantina oxidasa, enzima que la metaboliza, aumentando su toxicidad",
                    "Porque compiten por el mismo receptor de membrana",
                    "No existe tal interacción"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 90,
                  "question": "La gemcitabina se inactiva por acción de la enzima:",
                  "options": [
                    "Xantina oxidasa",
                    "Timidilato sintasa",
                    "Citidina desaminasa (a dFdU)",
                    "Dihidropirimidina deshidrogenasa"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 91,
                  "question": "La capecitabina es, en esencia:",
                  "options": [
                    "Un derivado del platino",
                    "Un profármaco oral que se metaboliza hasta 5-fluorouracilo",
                    "Un inhibidor de topoisomerasa",
                    "Un análogo de la vinca"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 92,
                  "question": "¿Cuál de los siguientes es un análogo de purinas usado en leucemias, junto con 6-MP y 6-TG?",
                  "options": [
                    "Citarabina",
                    "Cladribina / Fludarabina / Clofarabina",
                    "5-Fluorouracilo",
                    "Ciclofosfamida"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 93,
                  "question": "La diferencia estructural principal entre citarabina y gemcitabina es:",
                  "options": [
                    "La citarabina no tiene anillo de pirimidina",
                    "La gemcitabina tiene dos átomos de flúor en el carbono 2' del azúcar",
                    "La gemcitabina carece de grupo amino",
                    "No existen diferencias estructurales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 94,
                  "question": "La enzima MGMT (O6-metilguanina-ADN metiltransferasa) confiere resistencia porque:",
                  "options": [
                    "Degrada el fármaco antes de entrar a la célula",
                    "Repara/revierte la alquilación del ADN causada por ciertos fármacos",
                    "Bloquea la entrada del fármaco a la célula",
                    "Inhibe la apoptosis directamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 95,
                  "question": "El metotrexato es un antagonista de:",
                  "options": [
                    "Las purinas",
                    "El ácido fólico",
                    "Las pirimidinas",
                    "La tirosina cinasa"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 3: Agentes Alquilantes y Compuestos de Platino",
              "questions": [
                {
                  "id": 96,
                  "question": "El mecanismo general de los agentes alquilantes es:",
                  "options": [
                    "Inhibir microtúbulos",
                    "Formar enlaces covalentes con el ADN, dañando su estructura",
                    "Bloquear receptores de membrana",
                    "Inhibir la síntesis de asparagina"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 97,
                  "question": "Según la tabla de MTD, ¿qué fármaco presenta la mayor proporción de incremento respecto a la dosis estándar (18x)?",
                  "options": [
                    "Ciclofosfamida",
                    "Cisplatino",
                    "Tiotepa",
                    "Carboplatino"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 98,
                  "question": "La sigla \"VOD\", toxicidad compartida por casi todos los alquilantes de la tabla, se refiere a:",
                  "options": [
                    "Vasculitis obliterante difusa",
                    "Enfermedad veno-oclusiva hepática",
                    "Ventriculitis obstructiva del desarrollo",
                    "Vía oral disponible"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 99,
                  "question": "Según la tabla, los principales efectos tóxicos del cisplatino son:",
                  "options": [
                    "Cardiaca y hepática",
                    "Neuropatía periférica (PN) y renal",
                    "Pulmonar exclusivamente",
                    "Gastrointestinal exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 100,
                  "question": "La principal diferencia de toxicidad entre cisplatino y carboplatino es que el carboplatino:",
                  "options": [
                    "No tiene ninguna toxicidad renal ni neurológica",
                    "Tiene un perfil distinto (renal, PN, VOD hepática) con MTD mucho mayor (2000 vs 200 mg/m²)",
                    "Es más neurotóxico que el cisplatino",
                    "Solo se usa por vía oral"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 101,
                  "question": "La ciclofosfamida tiene una MTD de 7000 mg/m² y se asocia principalmente a toxicidad:",
                  "options": [
                    "Renal y del SNC",
                    "Cardiaca y VOD hepática",
                    "Pulmonar",
                    "Ocular"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 102,
                  "question": "La ifosfamida (MTD 16 000 mg/m²) es especialmente tóxica para:",
                  "options": [
                    "El corazón exclusivamente",
                    "El riñón y el SNC, además de VOD hepática",
                    "La médula ósea exclusivamente",
                    "La piel exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 103,
                  "question": "¿Qué fármaco de la tabla se asocia principalmente a toxicidad pulmonar?",
                  "options": [
                    "Melfalán",
                    "Busulfán",
                    "Carmustina (BCNU)",
                    "Cisplatino"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 104,
                  "question": "Los agentes alquilantes se consideran fármacos ciclo-celular:",
                  "options": [
                    "Específicos de la fase S",
                    "Específicos de la fase M",
                    "No específicos (actúan independientemente de la fase del ciclo)",
                    "Específicos de G2"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 105,
                  "question": "Melfalán y busulfán comparten como toxicidad principal:",
                  "options": [
                    "Cardiotoxicidad exclusiva",
                    "Toxicidad gastrointestinal (GI) y VOD hepática",
                    "Ototoxicidad",
                    "Retención de líquidos"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 4: Antimitóticos — Alcaloides de la Vinca y Taxanos",
              "questions": [
                {
                  "id": 106,
                  "question": "La diferencia central de mecanismo entre alcaloides de la Vinca y taxanos es que los primeros:",
                  "options": [
                    "Estabilizan los microtúbulos",
                    "Inhiben la polimerización de los microtúbulos",
                    "Bloquean la topoisomerasa I",
                    "Actúan sobre el ADN directamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 107,
                  "question": "La toxicidad potencialmente mortal de la vincristina si se administra por vía intratecal es:",
                  "options": [
                    "Insuficiencia renal",
                    "Neurotoxicidad grave con riesgo de muerte",
                    "Cardiotoxicidad",
                    "Fibrosis pulmonar"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 108,
                  "question": "El efecto adverso hematológico distintivo de la vinorelbina es:",
                  "options": [
                    "Anemia aplásica",
                    "Granulocitopenia",
                    "Policitemia",
                    "Trombocitosis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 109,
                  "question": "La vincristina interactúa notablemente con fenitoína, fenobarbital y carbamazepina porque estos son:",
                  "options": [
                    "Sustratos de la P-glucoproteína únicamente",
                    "Inductores/inhibidores enzimáticos que afectan su metabolismo",
                    "Antagonistas competitivos directos",
                    "Quelantes del fármaco"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 110,
                  "question": "El paclitaxel requiere premedicación antes de la infusión debido al riesgo de:",
                  "options": [
                    "Hipertensión severa",
                    "Reacciones de hipersensibilidad (disnea, urticaria, hipotensión)",
                    "Convulsiones",
                    "Hipoglucemia"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 111,
                  "question": "El paclitaxel interactúa principalmente a través de la isoenzima:",
                  "options": [
                    "CYP3A4",
                    "CYP2C8",
                    "CYP2D6",
                    "CYP1A2"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 112,
                  "question": "La formulación de nanopartículas de paclitaxel unido a albúmina mencionada en el documento es:",
                  "options": [
                    "Taxotere",
                    "Abraxane",
                    "Zoladex",
                    "Lucrin Depot"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 113,
                  "question": "Un efecto adverso que comparten paclitaxel y docetaxel es:",
                  "options": [
                    "Hipertensión pulmonar",
                    "Neutropenia y neurotoxicidad",
                    "Hiperglucemia",
                    "Hipertiroidismo"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 114,
                  "question": "Los antimitóticos se clasifican como fármacos ciclo-celular específicos porque actúan principalmente en:",
                  "options": [
                    "Fase S",
                    "Fase G1",
                    "Fase M (mitosis)",
                    "Fase G0"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 115,
                  "question": "El docetaxel interactúa metabólicamente sobre todo a través de:",
                  "options": [
                    "CYP2C8",
                    "CYP3A4",
                    "CYP2C9",
                    "No presenta interacciones metabólicas relevantes"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 5: Inhibidores de las Topoisomerasas I y II",
              "questions": [
                {
                  "id": 116,
                  "question": "La diferencia funcional principal entre topoisomerasa I y II es que la topoisomerasa I:",
                  "options": [
                    "Corta ambas cadenas de ADN",
                    "Corta una sola cadena de ADN",
                    "No actúa sobre el ADN",
                    "Solo actúa en el ARN"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 117,
                  "question": "Los principales inhibidores de topoisomerasa I mencionados son:",
                  "options": [
                    "Etopósido y tenipósido",
                    "Irinotecán y topotecán",
                    "Doxorrubicina y mitoxantrona",
                    "Bleomicina y actinomicina D"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 118,
                  "question": "El principal inhibidor de topoisomerasa II mencionado, que puede causar neoplasias secundarias (leucemias), es:",
                  "options": [
                    "Irinotecán",
                    "Etopósido",
                    "Topotecán",
                    "Metotrexato"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 119,
                  "question": "La toxicidad gastrointestinal grave y potencialmente mortal asociada al irinotecán es:",
                  "options": [
                    "Estreñimiento crónico",
                    "Diarrea aguda y retrasada",
                    "Perforación intestinal exclusivamente",
                    "Pancreatitis aguda"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 120,
                  "question": "El irinotecán interactúa farmacológicamente sobre todo a través de:",
                  "options": [
                    "CYP2D6",
                    "Sustratos de CYP3A4",
                    "CYP1A2",
                    "No tiene interacciones relevantes"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 121,
                  "question": "La absorción oral del topotecán se ve afectada por:",
                  "options": [
                    "Inductores de CYP3A4",
                    "Inhibidores de la P-glucoproteína",
                    "Antiácidos exclusivamente",
                    "La glicoproteína P no afecta al topotecán"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 122,
                  "question": "La \"supertorsión\" del ADN se resuelve gracias a la acción de:",
                  "options": [
                    "Las ADN polimerasas",
                    "Las topoisomerasas",
                    "Las helicasas exclusivamente",
                    "Las ligasas exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 123,
                  "question": "Un efecto adverso hematológico común a irinotecán, topotecán y etopósido es:",
                  "options": [
                    "Policitemia",
                    "Mielosupresión",
                    "Trombocitosis",
                    "Eosinofilia aislada"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 124,
                  "question": "El etopósido puede causar, además de mielosupresión, alopecia, náuseas y vómitos:",
                  "options": [
                    "Hipertensión arterial",
                    "Hipotensión durante la infusión",
                    "Hiperglucemia",
                    "Bradicardia refleja"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 125,
                  "question": "Irinotecán y topotecán comparten como parámetro de monitorización recomendado:",
                  "options": [
                    "Función tiroidea",
                    "Biometría hemática (BH)",
                    "Perfil lipídico",
                    "Glucemia en ayuno"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 6: Antibióticos Antitumorales",
              "questions": [
                {
                  "id": 126,
                  "question": "El mecanismo de acción de la actinomicina D consiste en:",
                  "options": [
                    "Inhibir la topoisomerasa I",
                    "Bloquear la ARN polimerasa dependiente de ADN",
                    "Inhibir la síntesis de asparagina",
                    "Estabilizar microtúbulos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 127,
                  "question": "Este grupo, además de la actinomicina D, incluye:",
                  "options": [
                    "Metotrexato y 5-FU",
                    "Antraciclinas, bleomicina, mitomicina C y mitoxantrona",
                    "Vincristina y paclitaxel",
                    "Cisplatino y carboplatino"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 128,
                  "question": "La toxicidad de órgano más característica y limitante de dosis de las antraciclinas es:",
                  "options": [
                    "Nefrotoxicidad",
                    "Cardiotoxicidad",
                    "Neurotoxicidad periférica",
                    "Hepatotoxicidad exclusiva"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 129,
                  "question": "Las antraciclinas dañan el ADN tumoral mediante:",
                  "options": [
                    "Solo unión a microtúbulos",
                    "Intercalación en el ADN, generación de radicales libres e inhibición de topoisomerasa II",
                    "Depleción de asparagina",
                    "Bloqueo de receptores hormonales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 130,
                  "question": "La toxicidad de órgano característica y limitante de dosis de la bleomicina es:",
                  "options": [
                    "Cardiotoxicidad",
                    "Fibrosis pulmonar",
                    "Nefrotoxicidad",
                    "Ototoxicidad"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 131,
                  "question": "La bleomicina es más activa en la fase del ciclo celular:",
                  "options": [
                    "S",
                    "G1",
                    "G2/M",
                    "G0"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 132,
                  "question": "La mitomicina C se activa preferentemente en:",
                  "options": [
                    "Células en fase S exclusivamente",
                    "Células en condiciones de hipoxia (microambiente tumoral hipóxico)",
                    "Células en reposo (G0) exclusivamente",
                    "No requiere activación"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 133,
                  "question": "La mitomicina C se considera un agente:",
                  "options": [
                    "Antimetabolito puro",
                    "Alquilante bioreductivo",
                    "Inhibidor de topoisomerasa I puro",
                    "Antimitótico puro"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 134,
                  "question": "La mitoxantrona se relaciona estructural/funcionalmente con:",
                  "options": [
                    "Los taxanos",
                    "Las antraciclinas, con menor cardiotoxicidad relativa",
                    "Los alcaloides de la vinca",
                    "Los inhibidores de tirosina cinasa"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 135,
                  "question": "Los antibióticos antitumorales suelen derivar originalmente de:",
                  "options": [
                    "Plantas superiores",
                    "Especies de Streptomyces (microorganismos)",
                    "Venenos animales",
                    "Síntesis puramente sintética sin origen natural"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 7: Enzimas y Fármacos de Mecanismos Diversos",
              "questions": [
                {
                  "id": 136,
                  "question": "El mecanismo de acción de la L-asparraginasa es:",
                  "options": [
                    "Inhibir la topoisomerasa II",
                    "Depletar la asparagina circulante, esencial para las células leucémicas",
                    "Alquilar el ADN",
                    "Bloquear microtúbulos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 137,
                  "question": "Las células de leucemia linfoblástica aguda son sensibles a la depleción de asparagina porque:",
                  "options": [
                    "Tienen exceso de asparagina sintetasa",
                    "Carecen o tienen limitada la capacidad de sintetizar asparagina de novo",
                    "No requieren asparagina para sobrevivir",
                    "Metabolizan la asparagina más rápido que las células sanas"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 138,
                  "question": "Un efecto adverso importante de la L-asparraginasa es:",
                  "options": [
                    "Cardiotoxicidad grave",
                    "Reacciones de hipersensibilidad, pancreatitis y alteraciones de la coagulación",
                    "Fibrosis pulmonar",
                    "Ototoxicidad"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 139,
                  "question": "El trióxido de arsénico se utiliza característicamente en:",
                  "options": [
                    "Leucemia mielocítica crónica",
                    "Leucemia promielocítica aguda",
                    "Cáncer de mama",
                    "Cáncer colorrectal"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 140,
                  "question": "El mecanismo del trióxido de arsénico incluye:",
                  "options": [
                    "Solo alquilación del ADN",
                    "Inducción de diferenciación y apoptosis celular",
                    "Inhibición de la síntesis de asparagina",
                    "Bloqueo de receptores de estrógeno"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 141,
                  "question": "Un fármaco \"ciclo-celular específico\" actúa:",
                  "options": [
                    "Independientemente de la fase del ciclo celular",
                    "Solo en una fase determinada del ciclo celular (p. ej. S o M)",
                    "Únicamente en células en reposo (G0)",
                    "Solo sobre células no proliferativas"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 142,
                  "question": "Un ejemplo de fármaco ciclo-celular no específico es:",
                  "options": [
                    "Metotrexato",
                    "Vincristina",
                    "Un agente alquilante (p. ej. ciclofosfamida)",
                    "Citarabina"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 143,
                  "question": "Fármacos como la L-asparraginasa y el trióxido de arsénico se agrupan en \"mecanismos diversos\" porque:",
                  "options": [
                    "Todos actúan igual que los alquilantes",
                    "No encajan claramente en las categorías clásicas (antimetabolitos, alquilantes, antimitóticos, etc.)",
                    "Solo se usan en tumores sólidos",
                    "Son todos anticuerpos monoclonales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 144,
                  "question": "A diferencia de la mayoría de los antineoplásicos, la L-asparraginasa actúa:",
                  "options": [
                    "Dentro del núcleo celular",
                    "Extracelularmente, depletando un nutriente circulante",
                    "Sobre los microtúbulos",
                    "Sobre receptores hormonales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 145,
                  "question": "El órgano particularmente afectado por la toxicidad de la L-asparraginasa (relacionado con síntesis proteica) es:",
                  "options": [
                    "El riñón",
                    "El páncreas / hígado (coagulopatía por menor síntesis de factores)",
                    "El pulmón",
                    "El corazón"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 8: Toxicidad, Resistencia y Manejo de la Emesis",
              "questions": [
                {
                  "id": 146,
                  "question": "Entre las toxicidades \"inmediatas\" de los citostáticos se incluyen:",
                  "options": [
                    "Fibrosis pulmonar tardía",
                    "Náuseas, vómitos y astenia",
                    "Neoplasias secundarias",
                    "Cardiomiopatía tardía"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 147,
                  "question": "Entre las toxicidades \"tardías\" de los citostáticos se incluyen:",
                  "options": [
                    "Náuseas inmediatas",
                    "Mielosupresión tardía, infertilidad y alopecia",
                    "Solo reacciones alérgicas agudas",
                    "Hipotensión durante la infusión"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 148,
                  "question": "La glicoproteína P (P-gp/MDR1) tiene un peso molecular aproximado de:",
                  "options": [
                    "70 kDa",
                    "170 kDa",
                    "500 kDa",
                    "10 kDa"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 149,
                  "question": "La función de la glicoproteína P en la resistencia a fármacos es:",
                  "options": [
                    "Aumentar la entrada del fármaco a la célula",
                    "Actuar como bomba de eflujo, expulsando el fármaco fuera de la célula",
                    "Degradar el ADN dañado",
                    "Inhibir la apoptosis directamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 150,
                  "question": "Además de las bombas de eflujo, otros mecanismos de resistencia incluyen:",
                  "options": [
                    "Solo cambios en el pH extracelular",
                    "Alteración de blancos de fármaco, reparación aumentada del daño y apoptosis inhibida",
                    "Aumento exclusivo de la vascularización tumoral",
                    "Ninguno, la única resistencia es por eflujo"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 151,
                  "question": "Según la clasificación ABC, el transportador asociado a resistencia frente a antraciclinas y mitoxantrona es:",
                  "options": [
                    "ABC B1 (P-gp)",
                    "ABC C1 (MRP1)",
                    "ABC G2 (MXR/BCRP)",
                    "ABC C6"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 152,
                  "question": "El \"potencial emetógeno\" de un régimen de quimioterapia se calcula considerando:",
                  "options": [
                    "Solo el costo del tratamiento",
                    "El fármaco, la dosis y la combinación usada, entre otros factores",
                    "Únicamente la vía de administración",
                    "La edad del paciente exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 153,
                  "question": "La estructura del SNC directamente involucrada en la fisiopatología de la emesis inducida por quimioterapia es:",
                  "options": [
                    "El hipotálamo exclusivamente",
                    "La zona gatillo quimiorreceptora (chemoreceptor trigger zone)",
                    "El cerebelo",
                    "La corteza motora"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 154,
                  "question": "Clases farmacológicas usadas como antieméticos en oncología incluyen:",
                  "options": [
                    "Betabloqueadores y diuréticos",
                    "Antagonistas 5-HT3, antagonistas NK1 y corticosteroides",
                    "Antibióticos y antifúngicos",
                    "Anticoagulantes orales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 155,
                  "question": "Los \"Hallmarks of Cancer\" (características distintivas del cáncer) son relevantes porque:",
                  "options": [
                    "Solo sirven para clasificar tumores benignos",
                    "Orientan el diseño racional de nuevas terapias dirigidas a esos mecanismos",
                    "No tienen relación con el tratamiento farmacológico",
                    "Solo aplican a tumores hematológicos"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 9: Hormonas Esteroides y sus Antagonistas",
              "questions": [
                {
                  "id": 156,
                  "question": "El protooncogén que codifica al receptor HER2 es inhibido específicamente por:",
                  "options": [
                    "Imatinib",
                    "Trastuzumab",
                    "Rituximab",
                    "Bevacizumab"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 157,
                  "question": "El protooncogén mutado en la leucemia mielocítica crónica (relacionado con Abl tirosina cinasa) se inhibe con:",
                  "options": [
                    "Trastuzumab",
                    "Imatinib",
                    "Cetuximab",
                    "Tamoxifeno"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 158,
                  "question": "El gen supresor de tumores mutado en más del 50% de los tumores humanos es:",
                  "options": [
                    "c-myc",
                    "Ras",
                    "p53",
                    "c-src"
                  ],
                  "correct": 2,
                  "explanation": ""
                },
                {
                  "id": 159,
                  "question": "El tamoxifeno actúa sobre el receptor de estrógeno:",
                  "options": [
                    "Degradándolo irreversiblemente en todos los tejidos",
                    "Uniéndose y modulando su actividad de forma tejido-específica (agonista/antagonista según el tejido)",
                    "Aumentando su expresión en todos los tejidos",
                    "No tiene relación con el receptor de estrógeno"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 160,
                  "question": "El tamoxifeno se clasifica como SERM porque:",
                  "options": [
                    "Es un esteroide puro",
                    "Es un modulador selectivo del receptor de estrógeno, con efectos distintos según el tejido",
                    "Solo bloquea receptores de andrógenos",
                    "Es un inhibidor de aromatasa"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 161,
                  "question": "El \"efecto llamarada\" (flare) al iniciar un agonista de GnRH se debe a:",
                  "options": [
                    "Una disminución inmediata de testosterona",
                    "Un aumento inicial transitorio de LH/FSH y testosterona antes de la down-regulation",
                    "Un bloqueo inmediato del receptor de GnRH",
                    "La activación de receptores de estrógeno"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 162,
                  "question": "El nivel de \"castración\" tras iniciar un agonista de GnRH se alcanza aproximadamente en:",
                  "options": [
                    "24 horas",
                    "3–4 semanas",
                    "6 meses",
                    "Inmediatamente tras la primera dosis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 163,
                  "question": "Un agonista de GnRH está contraindicado (o requiere precaución) en pacientes con:",
                  "options": [
                    "Hipertensión leve",
                    "Obstrucción urinaria severa o dolor óseo severo",
                    "Diabetes controlada",
                    "Asma leve"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 164,
                  "question": "La principal ventaja del degarelix (antagonista de GnRH) frente a los agonistas es:",
                  "options": [
                    "Mayor efecto flare",
                    "No produce efecto llamarada (flare) inicial",
                    "Se administra por vía oral",
                    "No requiere monitorización"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 165,
                  "question": "Zoladex y Lucrin Depot, mencionados en el documento, son ejemplos de:",
                  "options": [
                    "Antagonistas de GnRH",
                    "Agonistas de GnRH (goserelina y leuprolida)",
                    "Inhibidores de aromatasa",
                    "Antiestrógenos"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 10: Anticuerpos Monoclonales",
              "questions": [
                {
                  "id": 166,
                  "question": "El bevacizumab se dirige a:",
                  "options": [
                    "HER2",
                    "El factor de crecimiento endotelial vascular (FCEV/VEGF)",
                    "CD20",
                    "EGFR"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 167,
                  "question": "El cetuximab requiere premedicación con antihistamínico antes de la infusión porque:",
                  "options": [
                    "No tiene riesgo de reacciones",
                    "Puede causar exantema y reacciones a la infusión (mayor exantema = mayor respuesta)",
                    "Solo se administra por vía oral",
                    "Causa hipoglucemia severa"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 168,
                  "question": "El daratumumab se une a la proteína transmembrana CD38 y se utiliza principalmente en:",
                  "options": [
                    "Cáncer de mama",
                    "Mieloma múltiple",
                    "Cáncer colorrectal",
                    "Leucemia mielocítica crónica"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 169,
                  "question": "El rituximab se dirige al antígeno CD20 expresado en:",
                  "options": [
                    "Células tumorales sólidas exclusivamente",
                    "Linfocitos pre-B y B maduros",
                    "Neutrófilos",
                    "Células endoteliales"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 170,
                  "question": "El trastuzumab se utiliza principalmente en:",
                  "options": [
                    "Cáncer colorrectal",
                    "Cáncer de mama (que sobreexpresa HER2)",
                    "Leucemia linfocítica crónica",
                    "Linfoma no Hodgkin"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 171,
                  "question": "Según el documento, el anticuerpo monoclonal usado en leucemia linfocítica crónica es:",
                  "options": [
                    "Rituximab",
                    "Alemtuzumab",
                    "Gemtuzumab",
                    "Trastuzumab"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 172,
                  "question": "Los anticuerpos usados en cáncer colorrectal, según la lista de aplicaciones terapéuticas, son:",
                  "options": [
                    "Rituximab e ibritumomab",
                    "Cetuximab y bevacizumab",
                    "Trastuzumab y alemtuzumab",
                    "Gemtuzumab y daratumumab"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 173,
                  "question": "El anticuerpo monoclonal usado en leucemia mieloide aguda, según el documento, es:",
                  "options": [
                    "Trastuzumab",
                    "Gemtuzumab",
                    "Cetuximab",
                    "Bevacizumab"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 174,
                  "question": "En el linfoma no Hodgkin (LNH) se emplean, según el documento:",
                  "options": [
                    "Trastuzumab y alemtuzumab",
                    "Rituximab e ibritumomab",
                    "Cetuximab y bevacizumab",
                    "Gemtuzumab y daratumumab"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 175,
                  "question": "Una complicación infecciosa grave que puede reactivarse de forma letal con rituximab es:",
                  "options": [
                    "Tuberculosis",
                    "Hepatitis B",
                    "VIH",
                    "Neumonía por Pneumocystis"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Módulo 11: Inhibidores Enzimáticos Dirigidos y Misceláneos",
              "questions": [
                {
                  "id": 176,
                  "question": "El imatinib es de primera línea en:",
                  "options": [
                    "Cáncer de mama",
                    "Leucemia mielocítica crónica (LMC)",
                    "Linfoma no Hodgkin",
                    "Cáncer colorrectal"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 177,
                  "question": "El imatinib inhibe específicamente:",
                  "options": [
                    "HER2",
                    "La tirosina cinasa Abl (proteína de fusión BCR-ABL) y también PDGFR",
                    "CD20",
                    "El receptor de estrógeno"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 178,
                  "question": "El sistema ubiquitina-proteasoma es un blanco terapéutico en el mieloma múltiple porque:",
                  "options": [
                    "Sintetiza el ADN tumoral",
                    "Se encarga de degradar proteínas mal plegadas, cuya acumulación resulta tóxica si se inhibe el sistema",
                    "Produce anticuerpos anómalos",
                    "Regula directamente la angiogénesis"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 179,
                  "question": "Inhibidores del proteasoma mencionados en el documento incluyen:",
                  "options": [
                    "Talidomida, lenalidomida, pomalidomida",
                    "Bortezomib, carfilzomib, ixazomib",
                    "Imatinib, trastuzumab, rituximab",
                    "Cisplatino, carboplatino, oxaliplatino"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 180,
                  "question": "La talidomida, lenalidomida y pomalidomida actúan principalmente uniéndose a:",
                  "options": [
                    "El proteasoma directamente",
                    "Cereblon",
                    "CD38",
                    "La topoisomerasa II"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 181,
                  "question": "En el mieloma múltiple se acumulan proteínas mal plegadas porque:",
                  "options": [
                    "Las células tienen un sistema de reparación de ADN hiperactivo",
                    "Existe una sobreproducción de proteínas (inmunoglobulinas) que satura los mecanismos de degradación",
                    "No producen proteínas en absoluto",
                    "El proteasoma está hiperactivo, degradando todo en exceso"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 182,
                  "question": "El mecanismo novedoso de la plitidepsina, según el esquema del documento, involucra la inhibición de:",
                  "options": [
                    "CD20",
                    "eEF1A2 (factor de elongación eucariota 1A2)",
                    "La aromatasa",
                    "El receptor de GnRH"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 183,
                  "question": "La plitidepsina elimina proteínas mal plegadas a través de dos vías: el proteasoma y:",
                  "options": [
                    "La glucólisis",
                    "El agresoma/autofagia",
                    "La fosforilación oxidativa",
                    "La síntesis de novo de lípidos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 184,
                  "question": "Los \"inhibidores del control inmune\" (checkpoint inhibitors) actúan principalmente para:",
                  "options": [
                    "Aumentar la proliferación de células tumorales",
                    "Bloquear la evasión inmune del tumor, favoreciendo su reconocimiento por el sistema inmune",
                    "Inhibir directamente la síntesis de ADN",
                    "Reemplazar a la quimioterapia citotóxica en todos los casos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 185,
                  "question": "El imatinib representó un cambio de paradigma frente a la quimioterapia citotóxica clásica porque:",
                  "options": [
                    "Es más tóxico pero más barato",
                    "Actúa de forma dirigida sobre una alteración molecular específica del tumor, con menor toxicidad inespecífica",
                    "Solo se usa en combinación con radioterapia",
                    "No requiere seguimiento clínico"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Aplicación: Interpretación y Comparación de Fármacos",
              "questions": [
                {
                  "id": 186,
                  "question": "Un paciente en tratamiento con vincristina inicia carbamazepina por una neuropatía. ¿Qué se puede predecir sobre los niveles/efecto de la vincristina?",
                  "options": [
                    "No hay interacción relevante",
                    "La carbamazepina, como inductor/modulador enzimático, puede alterar el metabolismo de la vincristina y su efecto",
                    "La carbamazepina potencia siempre la neurotoxicidad sin afectar el metabolismo",
                    "La vincristina inactiva a la carbamazepina"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 187,
                  "question": "Comparando cisplatino y carboplatino según la tabla de MTD y toxicidad, si un paciente tiene función renal límite pero se prioriza minimizar la neuropatía periférica, ¿qué opción es más razonable?",
                  "options": [
                    "Cisplatino, porque no tiene toxicidad renal",
                    "Ninguno es ideal, pero el carboplatino suele preferirse en compromiso renal relativo por su perfil de dosificación distinto, vigilando mielosupresión",
                    "Ambos son igual de nefrotóxicos y neurotóxicos, no importa cuál se use",
                    "El carboplatino siempre se evita en pacientes con cualquier grado de disfunción renal"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 188,
                  "question": "Si se combinan un agente ciclo-celular específico (p. ej. citarabina, fase S) con uno no específico (p. ej. ciclofosfamida) en un mismo esquema, ¿qué principio farmacológico se está aplicando?",
                  "options": [
                    "Se busca que ambos actúen exactamente en la misma fase para maximizar sinergismo",
                    "Se busca atacar a las células tumorales en distintas fases del ciclo celular, aumentando la fracción de células eliminadas",
                    "Es una combinación sin fundamento farmacológico",
                    "Se busca neutralizar mutuamente la toxicidad de ambos fármacos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 189,
                  "question": "Un tumor que sobreexpresa glicoproteína P (P-gp/MDR1) probablemente mostrará resistencia cruzada a:",
                  "options": [
                    "Antimetabolitos como el metotrexato exclusivamente",
                    "Antraciclinas, alcaloides de la vinca y taxanes (fármacos derivados de productos naturales, sustratos típicos de P-gp)",
                    "Únicamente a los agentes alquilantes",
                    "A todos los antineoplásicos por igual, sin excepción"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 190,
                  "question": "En una paciente premenopáusica con cáncer de mama hormono-dependiente, ¿qué estrategia hormonal es más coherente con los mecanismos descritos (GnRH agonistas vs. tamoxifeno)?",
                  "options": [
                    "Usar un inhibidor de aromatasa como monoterapia, ya que actúa igual en pre y posmenopausia",
                    "Usar tamoxifeno (bloquea el receptor de estrógeno) y/o supresión ovárica con agonistas de GnRH, ya que los inhibidores de aromatasa son menos efectivos si los ovarios siguen produciendo estrógenos",
                    "Usar degarelix, ya que es exclusivo para cáncer de mama",
                    "No hay opciones hormonales en mujeres premenopáusicas"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 191,
                  "question": "Si un paciente recibe etopósido de forma crónica durante años, ¿qué efecto tardío específico de este fármaco debe vigilarse a largo plazo, a diferencia de otros mielosupresores?",
                  "options": [
                    "Cardiotoxicidad irreversible",
                    "Aparición de neoplasias secundarias (leucemias) relacionadas con daño en la topoisomerasa II",
                    "Fibrosis pulmonar progresiva",
                    "Ototoxicidad permanente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 192,
                  "question": "Comparando el mecanismo del imatinib con el de un anticuerpo monoclonal como el trastuzumab, ¿cuál es la diferencia funcional clave?",
                  "options": [
                    "Ambos actúan igual, uniéndose al mismo epítopo extracelular",
                    "El imatinib inhibe la actividad catalítica intracelular de una tirosina cinasa, mientras que el trastuzumab se une extracelularmente al receptor (HER2) bloqueando su señalización",
                    "El trastuzumab actúa dentro del núcleo celular",
                    "El imatinib solo actúa sobre anticuerpos, no sobre enzimas"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 193,
                  "question": "Un paciente que recibe rituximab será sometido posteriormente a cisplatino. Según las notas de interacción del documento, ¿qué riesgo aumentado debe vigilarse?",
                  "options": [
                    "Mayor riesgo de fibrosis pulmonar",
                    "Mayor riesgo de nefrotoxicidad al combinar ambos fármacos",
                    "Mayor riesgo de neurotoxicidad exclusivamente",
                    "No existe ninguna interacción relevante entre ambos"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 194,
                  "question": "Si se necesita evitar el \"efecto flare\" al iniciar terapia de deprivación androgénica en un paciente con metástasis óseas vertebrales (riesgo de compresión medular), ¿qué opción terapéutica es más coherente con los mecanismos descritos?",
                  "options": [
                    "Usar un agonista de GnRH sin ninguna cobertura adicional",
                    "Usar degarelix (antagonista de GnRH), que no produce el aumento inicial de testosterona",
                    "Usar tamoxifeno, ya que no tiene relación con el eje gonadal",
                    "Aumentar la dosis del agonista de GnRH para acelerar la down-regulation"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 195,
                  "question": "Un mieloma múltiple deja de responder a bortezomib (inhibidor del proteasoma). Según los mecanismos alternativos descritos en el documento, ¿qué otra clase farmacológica con mecanismo distinto podría considerarse?",
                  "options": [
                    "Otro inhibidor de topoisomerasa I",
                    "Un inmunomodulador que actúe sobre cereblon (talidomida/lenalidomida/pomalidomida) o plitidepsina (vía eEF1A2)",
                    "Un alcaloide de la vinca, ya que comparte el mismo mecanismo",
                    "Un agonista de GnRH"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 196,
                  "question": "Un paciente trasplantado renal en tratamiento con azatioprina desarrolla gota y su médico le prescribe alopurinol sin ajustar la dosis del inmunosupresor. ¿Qué es más probable que ocurra?",
                  "options": [
                    "No pasa nada, ambos fármacos son independientes",
                    "Mielosupresión grave, ya que el alopurinol inhibe la xantina oxidasa y aumenta los niveles activos de 6-mercaptopurina (metabolito de la azatioprina)",
                    "El alopurinol potencia el rechazo del trasplante",
                    "La azatioprina se vuelve completamente inactiva"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 197,
                  "question": "Durante la infusión de paclitaxel, una paciente presenta súbitamente disnea, urticaria e hipotensión. ¿Qué explica este cuadro y qué pudo haberse hecho para prevenirlo?",
                  "options": [
                    "Es un efecto esperado de la neurotoxicidad; no requiere intervención",
                    "Es una reacción de hipersensibilidad; debía haberse administrado premedicación (p. ej. antihistamínicos y corticoides) antes de la infusión",
                    "Es un signo de sobredosis de vincristina",
                    "Corresponde a toxicidad hepática aguda, no relacionada con la infusión"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 198,
                  "question": "Un paciente con leucemia mielocítica crónica (LMC) es tratado con imatinib en lugar de quimioterapia citotóxica clásica. ¿Qué ventaja clínica integra mejor los conceptos de mecanismo dirigido vs. citotóxico?",
                  "options": [
                    "El imatinib es más barato, esa es su única ventaja",
                    "Al inhibir específicamente la proteína de fusión BCR-ABL, el imatinib logra control de la enfermedad con menor toxicidad sistémica inespecífica que la quimioterapia citotóxica",
                    "El imatinib actúa igual que la quimioterapia citotóxica, sin diferencias clínicas",
                    "El imatinib solo sirve como tratamiento paliativo sin impacto en la enfermedad"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 199,
                  "question": "Por error de administración, un paciente recibe vincristina por vía intratecal en lugar de intravenosa. ¿Cuál es la consecuencia esperada según el documento?",
                  "options": [
                    "Un efecto terapéutico potenciado sin mayor riesgo",
                    "Neurotoxicidad grave, con riesgo de muerte (es uno de los errores de medicación más graves y frecuentemente citados en oncología)",
                    "Ninguna diferencia respecto a la vía intravenosa",
                    "Solo produce alopecia adicional"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 200,
                  "question": "Un paciente con linfoma no Hodgkin en tratamiento con rituximab presenta reactivación fulminante de una hepatitis B no diagnosticada previamente. ¿Qué medida se integra lógicamente a partir de este caso?",
                  "options": [
                    "El rituximab no tiene relación con infecciones virales, fue una coincidencia",
                    "Debe realizarse tamizaje de hepatitis B antes de iniciar rituximab, dado el riesgo conocido de reactivación viral letal",
                    "La reactivación de hepatitis B solo ocurre con quimioterapia citotóxica, nunca con anticuerpos monoclonales",
                    "El tratamiento con rituximab debe suspenderse en todos los pacientes de forma preventiva, sin excepción"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 201,
                  "question": "Una mujer con cáncer de mama cuyo tumor sobreexpresa HER2 inicia trastuzumab. ¿Qué parámetro debe vigilarse estrechamente durante el seguimiento, integrando el mecanismo y la toxicidad del fármaco?",
                  "options": [
                    "Función tiroidea exclusivamente",
                    "Fracción de eyección ventricular izquierda (FEVI), por el riesgo de miocardiopatía asociada a trastuzumab",
                    "Glucemia en ayuno",
                    "Función pulmonar exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 202,
                  "question": "Un paciente con cáncer de próstata metastásico inicia leuprolide (agonista de GnRH) y durante la primera semana refiere empeoramiento del dolor óseo. ¿Qué está ocurriendo y qué estrategia pudo haberlo mitigado?",
                  "options": [
                    "Es progresión tumoral irreversible; se debe suspender el fármaco de inmediato",
                    "Es el \"efecto llamarada\" (flare) por el aumento inicial transitorio de testosterona; pudo haberse mitigado con un antiandrógeno de cobertura o usando un antagonista de GnRH como degarelix",
                    "Es un efecto adverso permanente del fármaco sin relación con su mecanismo",
                    "Es evidencia de que el paciente necesita quimioterapia citotóxica en lugar de hormonoterapia"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 203,
                  "question": "Un paciente con cáncer colorrectal metastásico recibe la combinación de cetuximab y bevacizumab. ¿Qué principio de integración farmacológica explica esta combinación?",
                  "options": [
                    "Ambos fármacos tienen exactamente el mismo mecanismo, por lo que se potencian de forma redundante",
                    "Se combinan dos mecanismos distintos y complementarios: bloqueo del receptor de EGFR (cetuximab) e inhibición de la angiogénesis vía VEGF (bevacizumab)",
                    "Ambos actúan como antimetabolitos clásicos",
                    "Es una combinación sin sustento en el mecanismo de acción de cada fármaco"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 204,
                  "question": "Un paciente en quimioterapia con un régimen de alto potencial emetógeno no recibe profilaxis antiemética adecuada y desarrolla vómitos incoercibles con deshidratación. ¿Qué integración de conceptos explica el manejo adecuado que se omitió?",
                  "options": [
                    "No existe relación entre el potencial emetógeno del régimen y la necesidad de profilaxis",
                    "Debió calcularse el potencial emetógeno del régimen y usarse profilaxis con antagonistas 5-HT3, antagonistas NK1 y corticosteroides según el riesgo",
                    "Los vómitos en quimioterapia nunca requieren profilaxis farmacológica",
                    "El manejo antiemético solo es relevante en regímenes de bajo riesgo"
                  ],
                  "correct": 1,
                  "explanation": ""
                },
                {
                  "id": 205,
                  "question": "Un paciente recibe bevacizumab y está programado para una cirugía electiva en 5 días. ¿Qué decisión clínica es la más coherente con el mecanismo y las notas de seguridad del fármaco?",
                  "options": [
                    "Continuar el bevacizumab sin cambios, no tiene relación con la cicatrización",
                    "Suspender el bevacizumab antes del procedimiento quirúrgico, dado su riesgo de sangrado y de problemas en la cicatrización de heridas",
                    "Aumentar la dosis de bevacizumab antes de la cirugía para \"proteger\" al paciente",
                    "Sustituirlo por cisplatino inmediatamente antes de la cirugía"
                  ],
                  "correct": 1,
                  "explanation": ""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "semana2",
      "label": "SEMANA 02",
      "icon": "🧪",
      "colorClass": "week-blue",
      "title": "Antimicrobianos y Antibiogramas",
      "description": "Estudia la clasificación de antibióticos, los mecanismos de resistencia bacteriana y la interpretación clínica del antibiograma.",
      "modules": [
        {
          "id": "antibiograma",
          "title": "Antibiograma",
          "description": "Revisa la clasificación de los antibióticos por familia y mecanismo de acción, los métodos de la prueba de susceptibilidad y la interpretación clínica del antibiograma en casos reales.",
          "topics": [
            "Dianas terapéuticas y mecanismos de acción de los antibióticos",
            "Clasificación de antibióticos por familias",
            "Métodos de difusión en disco (Kirby-Bauer), CMI y sistemas automatizados",
            "Interpretación clínica del antibiograma y casos integradores"
          ],
          "sections": [
            {
              "title": "Clasificación de Antibióticos por Familias y Mecanismos de Acción",
              "questions": [
                {
                  "id": 206,
                  "question": "¿Cuál es el mecanismo de acción de la familia de los antibióticos Betalactámicos?",
                  "options": [
                    "Inhibición de la ADN girasa bacteriana.",
                    "Unión a las PBP (Proteínas de Unión a Penicilina) para bloquear la transpeptidación y síntesis de la pared celular.",
                    "Alteración de la subunidad ribosomal 50S.",
                    "Bloqueo de la dihidrofolato reductasa."
                  ],
                  "correct": 1,
                  "explanation": "Los betalactámicos impiden la formación de los enlaces cruzados de peptidoglicano al inhibir las PBP."
                },
                {
                  "id": 207,
                  "question": "¿A qué familia de antibióticos pertenecen la Gentamicina y la Amikacina, y cuál es su diana celular?",
                  "options": [
                    "Aminoglucósidos; inhiben la síntesis de proteínas uniéndose a la subunidad 30S.",
                    "Macrólidos; alteran la membrana citoplasmática.",
                    "Fluoroquinolonas; inhiben la ARN polimerasa.",
                    "Betalactámicos; bloquean la síntesis de ácido fólico."
                  ],
                  "correct": 0,
                  "explanation": "La Gentamicina y Amikacina son aminoglucósidos que inducen la lectura errónea del ARNm al unirse a la subunidad 30S."
                },
                {
                  "id": 208,
                  "question": "La Vancomicina es un representante de la familia de los:",
                  "options": [
                    "Lipopéptidos",
                    "Glucopéptidos, los cuales inhiben la síntesis de la pared celular al unirse al extremo D-Ala-D-Ala del peptidoglicano.",
                    "Oxazolidinonas",
                    "Macrólidos"
                  ],
                  "correct": 1,
                  "explanation": "Los glucopéptidos como la vancomicina bloquean la polimerización del peptidoglicano uniéndose a la secuencia D-Alanil-D-Alanina."
                },
                {
                  "id": 209,
                  "question": "¿Qué fármacos pertenecen a la familia de las Fluoroquinolonas y cuál es su blanco molecular?",
                  "options": [
                    "Ciprofloxacina y Levofloxacina; inhiben la ADN girasa (topoisomerasa II) y topoisomerasa IV impidiendo la replicación del ADN.",
                    "Azitromicina y Claritromicina; inhiben la subunidad 50S.",
                    "Oxacilina y Cefotaxima; destruyen la pared celular.",
                    "Trimethoprim y Sulfametoxazol; inhiben el PABA."
                  ],
                  "correct": 0,
                  "explanation": "Las fluoroquinolonas interfieren con el empaquetamiento y desenrollamiento del ADN bacteriano inactivando las topoisomerasas."
                },
                {
                  "id": 210,
                  "question": "Las Sulfonamidas interfieren en el metabolismo bacteriano mediante:",
                  "options": [
                    "El bloqueo de la síntesis de peptidoglicano.",
                    "La inhibición competitiva de la enzima dihidropteroato sintasa en la vía de síntesis del ácido fólico.",
                    "La lisis de la membrana celular de bacterias Gram positivas.",
                    "La degradación de ribosomas 70S."
                  ],
                  "correct": 1,
                  "explanation": "Las sulfonamidas son análogos estructurales del PABA que inhiben la síntesis de folato, cofactor esencial en la síntesis de purinas y pirimidinas."
                },
                {
                  "id": 211,
                  "question": "Fármacos como la Eritromicina, Azitromicina y Claritromicina se clasifican dentro de la familia de los:",
                  "options": [
                    "Aminoglucósidos",
                    "Macrólidos, los cuales inhiben la síntesis de proteínas uniéndose reversiblemente a la subunidad ribosomal 50S.",
                    "Carbapenémicos",
                    "Tetraciclinas"
                  ],
                  "correct": 1,
                  "explanation": "Los macrólidos bloquean la translocación del péptido naciente al unirse al ARN ribosomal 23S de la subunidad 50S."
                },
                {
                  "id": 212,
                  "question": "¿Cuál es la familia farmacológica a la que pertenece el Linezolid y contra qué tipo de patógenos destaca su actividad?",
                  "options": [
                    "Oxazolidinonas; activas principalmente contra cocos Gram positivos multirresistentes (MRSA, VRE).",
                    "Betalactámicos; activos solo contra bacilos Gram negativos anaerobios.",
                    "Lipopéptidos; activos exclusivamente contra bacilos Gram negativos.",
                    "Nitrofuranos; activos solo en vías urinarias contra <em>Proteus</em>."
                  ],
                  "correct": 0,
                  "explanation": "El Linezolid (oxazolidinona) previene la formación del complejo 70S de iniciación proteica y es un pilar en infecciones por Gram positivos resistentes."
                },
                {
                  "id": 213,
                  "question": "La Daptomicina es un antibiótico de la familia de los Lipopéptidos cuyo mecanismo de acción consiste en:",
                  "options": [
                    "Inhibir la transcripción del ARN.",
                    "Despolarizar la membrana citoplasmática en presencia de calcio, provocando la pérdida del potencial de membrana e interrupción de la síntesis de ADN y ARN.",
                    "Inactivar la ADN ligasa.",
                    "Competir con la PBP3."
                  ],
                  "correct": 1,
                  "explanation": "Los lipopéptidos alteran la integridad funcional de la membrana celular de bacterias Gram positivas de forma rápida."
                },
                {
                  "id": 214,
                  "question": "Las Tetraciclinas (ej. Doxiciclina) son antibióticos de amplio espectro que ejercen su acción mediante:",
                  "options": [
                    "Bloqueo de la enzima peptidil transferasa en la subunidad 50S.",
                    "Unión a la subunidad 30S impidiendo la entrada del aminoacil-ARNt al sitio A del ribosoma.",
                    "Rompimiento del anillo betalactámico.",
                    "Formación de poros en la pared de peptidoglicano."
                  ],
                  "correct": 1,
                  "explanation": "Las tetraciclinas impiden físicamente la adición de nuevos aminoácidos a la cadena polipeptídica en crecimiento al unirse a la subunidad 30S."
                },
                {
                  "id": 215,
                  "question": "¿Cuál de las siguientes parejas antibiótico-mecanismo de acción está INCORRECTAMENTE relacionada?",
                  "options": [
                    "Ceftriaxona - Inhibición de la síntesis de la pared celular.",
                    "Ciprofloxacina - Inhibición de la ADN girasa.",
                    "Vancomicina - Inhibición de la síntesis proteica en la subunidad 30S.",
                    "Azitromicina - Inhibición de la síntesis proteica en la subunidad 50S."
                  ],
                  "correct": 2,
                  "explanation": "La Vancomicina es un glucopéptido que inhibe la síntesis de la pared celular (peptidoglicano), NO la síntesis proteica."
                }
              ]
            },
            {
              "title": "Métodos de Antibiograma: Manuales, Cuantitativos y Automatizados",
              "questions": [
                {
                  "id": 216,
                  "question": "¿Qué es un antibiograma en el laboratorio microbiológico?",
                  "options": [
                    "Una tinción diferencial para observar la forma de las bacterias al microscopio.",
                    "Una prueba microbiológica in vitro que evalúa la susceptibilidad o resistencia de una cepa bacteriana aislada frente a un panel de antibióticos.",
                    "Un examen de sangre para cuantificar los leucocitos del paciente.",
                    "Una prueba molecular para secuenciar el genoma completo del hospedador."
                  ],
                  "correct": 1,
                  "explanation": "El antibiograma mide la respuesta cuantitativa o cualitativa de una bacteria expuesta a antimicrobianos estandarizados."
                },
                {
                  "id": 217,
                  "question": "¿Qué organizaciones internacionales se encargan de estandarizar las metodologías, puntos de corte e interpretación de los antibiogramas a nivel global?",
                  "options": [
                    "FDA y CDC únicamente.",
                    "CLSI (Clinical and Laboratory Standards Institute) y EUCAST (European Committee on Antimicrobial Susceptibility Testing).",
                    "UNESCO y UNICEF.",
                    "ISO y Greenpeace."
                  ],
                  "correct": 1,
                  "explanation": "CLSI (EE. UU.) y EUCAST (Europa) definen anualmente las tablas de puntos de corte de halos (mm) y CMI ($\\mu g/mL$) para categorizar la susceptibilidad."
                },
                {
                  "id": 218,
                  "question": "En el método de difusión en disco (Kirby-Bauer), ¿cuál es el medio de cultivo estándar utilizado rutinariamente?",
                  "options": [
                    "Agar Sangre de cordero.",
                    "Agar Mueller-Hinton.",
                    "Agar MacConkey.",
                    "Caldo Nutritivo simple."
                  ],
                  "correct": 1,
                  "explanation": "El Agar Mueller-Hinton está estandarizado en cuanto a pH, profundidad (4 mm) y concentración de cationes para permitir una difusión uniforme de los discos de antibiótico."
                },
                {
                  "id": 219,
                  "question": "¿Cómo se interpreta el halo de inhibición en el método de Kirby-Bauer?",
                  "options": [
                    "El halo mide la temperatura a la que muere la bacteria.",
                    "Se mide el diámetro en milímetros (mm) de la zona transparente alrededor del disco de antibiótico donde no hubo crecimiento bacteriano y se compara con las tablas estandarizadas.",
                    "Se cuenta el número de colonias que crecieron dentro del disco.",
                    "Se mide el volumen de líquido absorbido por el papel filtro."
                  ],
                  "correct": 1,
                  "explanation": "El diámetro del halo reflejará la sensibilidad de la bacteria; a mayor halo (superando el punto de corte), mayor probabilidad de categorizarse como Sensible."
                },
                {
                  "id": 220,
                  "question": "¿Qué significa que una bacteria sea categorizada como \"Intermedia (I)\" en un antibiograma?",
                  "options": [
                    "Que el antibiótico es extremadamente tóxico para el paciente.",
                    "Que la susceptibilidad es incierta, pero el antibiótico puede ser eficaz si se administra a dosis más altas o en sitios donde el fármaco se concentra fisiológicamente (ej. vía urinaria).",
                    "Que la bacteria ha muerto completamente en la placa.",
                    "Que hubo un error técnico y la prueba debe descartarse."
                  ],
                  "correct": 1,
                  "explanation": "La categoría Intermedia actúa como una zona de amortiguación técnica y clínica donde el éxito terapéutico depende de aumentar la exposición/dosis."
                },
                {
                  "id": 221,
                  "question": "¿Qué es la Concentración Inhibitoria Mínima (MIC / CMI)?",
                  "options": [
                    "La cantidad de antibiótico consumida por el paciente en 24 horas.",
                    "La menor concentración de un antimicrobiano ($\\mu g/mL$) que inhibe el crecimiento visible de un microorganismo tras incubación in vitro.",
                    "El tiempo mínimo necesario para matar al 50% de las bacterias.",
                    "La dosis mínima recomendada en el prospecto comercial."
                  ],
                  "correct": 1,
                  "explanation": "La CMI es el parámetro cuantitativo clave en microbiología médica para orientar la dosificación farmacodinámica."
                },
                {
                  "id": 222,
                  "question": "¿Por qué la determinación exacta de la CMI es especialmente crítica en la atención de un paciente grave o en UCI?",
                  "options": [
                    "Porque sustituye la necesidad de realizar cultivos de control.",
                    "Porque permite ajustar con precisión las dosis, intervalos e infusiones continuas según la farmacocinética/farmacodinámica (PK/PD) del paciente crítico.",
                    "Porque predice el costo financiero exacto del tratamiento.",
                    "Porque evita que el paciente desarrolle fiebre."
                  ],
                  "correct": 1,
                  "explanation": "En pacientes sépticos u organopáticos, conocer la CMI exacta ayuda a garantizar niveles séricos por encima de la CMI evitando subdosificación o toxicidad."
                },
                {
                  "id": 223,
                  "question": "¿En qué consiste el método del E-test (Epsilómetro)?",
                  "options": [
                    "Una prueba rápida que usa tiras reactivas de orina.",
                    "Una técnica cuantitativa que utiliza una tira plástica impregnada con un gradiente exponencial predefinido de antibiótico para leer directamente la CMI en la intersección del elipse de inhibición.",
                    "La siembra de bacterias en tubos con caldo de cultivo en serie.",
                    "El uso de rayos ultravioleta para medir la densidad óptica."
                  ],
                  "correct": 1,
                  "explanation": "El E-test combina la simplicidad de la difusión en agar con la precisión cuantitativa de obtener un valor de CMI directo."
                },
                {
                  "id": 224,
                  "question": "¿Cuáles son dos ventajas principales de los sistemas automatizados de antibiograma (ej. VITEK 2, BD Phoenix, MicroScan WalkAway) en comparación con los métodos manuales?",
                  "options": [
                    "Son 100% gratuitos y no requieren energía eléctrica.",
                    "Reducen el tiempo de obtención de resultados (4-18 horas), ofrecen alta estandarización, procesan gran volumen de muestras e interpretan reglas fenotípicas complejas mediante software inteligente.",
                    "Permiten realizar el examen sin necesidad de aislar la bacteria previamente.",
                    "Diagnostican infecciones virales e inmunológicas simultáneamente."
                  ],
                  "correct": 1,
                  "explanation": "La automatización acelera el reporte microbiológico y minimiza la variabilidad interpoblacional en la lectura manual de halos."
                },
                {
                  "id": 225,
                  "question": "¿Cuál es una limitación potencial de los sistemas automatizados de antibiograma que obliga a realizar pruebas manuales confirmatorias?",
                  "options": [
                    "No pueden utilizarse con bacterias Gram negativas.",
                    "Pueden presentar dificultades o falsas susceptibilidades ante mecanismos de resistencia emergentes, inducibles o de lenta expresión (ej. hVISA, fenotipos raros).",
                    "Solo funcionan con muestras de esputo.",
                    "Tardan más de 2 semanas en emitir un reporte."
                  ],
                  "correct": 1,
                  "explanation": "Las máquinas requieren paneles actualizados y en ocasiones no detectan resistencias heterogéneas o inducibles sin pruebas suplementarias (ej. disco de cefoxitina, E-test)."
                }
              ]
            },
            {
              "title": "Interpretación del Antibiograma, Criterios Clínicos y Casos Integradores",
              "questions": [
                {
                  "id": 226,
                  "question": "¿Por qué NO se debe elegir simplemente el antibiótico que muestre el \"halo de inhibición más grande\" en un reporte de Kirby-Bauer?",
                  "options": [
                    "Porque los halos grandes indican mayor toxicidad renal.",
                    "Porque cada antibiótico tiene un peso molecular, tasa de difusión y puntos de corte (en mm) totalmente diferentes estandarizados por CLSI/EUCAST.",
                    "Porque los halos grandes son siempre artefactos del laboratorio.",
                    "Porque los discos grandes contienen más cantidad de bacterias."
                  ],
                  "correct": 1,
                  "explanation": "Un halo de 22 mm en Nitrofurantoína puede significar \"Sensible\", mientras que el mismo halo en Ampicilina podría significar \"Resistente\". La interpretación depende de la tabla de puntos de corte de cada molécula."
                },
                {
                  "id": 227,
                  "question": "¿Por qué la interpretación del antibiograma depende del sitio anatómico de la infección?",
                  "options": [
                    "Porque el laboratorio usa agar con sangre del órgano afectado.",
                    "Porque un antibiótico reportado como \"Sensible\" in vitro puede no alcanzar concentraciones terapéuticas eficaces en tejidos protegidos por barreras (ej. barrera hematoencefálica, próstata) o excretarse de forma inactiva.",
                    "Porque las bacterias cambian de especie según el órgano.",
                    "Porque la temperatura corporal varía dramáticamente en la piel comparada con el riñón."
                  ],
                  "correct": 1,
                  "explanation": "Las propiedades farmacocinéticas (biodisponibilidad, penetración tisular, unión a proteínas) dictan si el fármaco funcionará in vivo independientemente del reporte de placa."
                },
                {
                  "id": 228,
                  "question": "¿Por qué la Nitrofurantoína es una excelente elección para una IVU baja (cistitis) no complicada por <em>E. coli</em>, pero está estrictamente CONTRAINDICADA en pielonefritis o sepsis urinaria?",
                  "options": [
                    "Porque destruye los glóbulos blancos en el riñón.",
                    "Porque se concentra masivamente en la luz vesical (orina), pero no alcanza niveles terapéuticos en el parénquima renal ni en tejido sistémico/sangre.",
                    "Porque vuelve la orina de color azul.",
                    "Porque inactiva la ciprofloxacina en el estómago."
                  ],
                  "correct": 1,
                  "explanation": "La Nitrofurantoína tiene una penetración tisular renal mínima; solo sirve para infecciones confinados a la vejiga (cistitis)."
                },
                {
                  "id": 229,
                  "question": "Paciente femenina de 22 años con IVU baja (Caso 1 de la guía). El antibiograma reporta: Ampicilina (10 mm, R), Ciprofloxacina (28 mm, S), Nitrofurantoína (22 mm, S), Trimetoprim-SMX (12 mm, R). Considerando el uso racional de antibióticos y el principio de menor espectro, ¿cuál es la mejor opción?",
                  "options": [
                    "Ampicilina",
                    "Nitrofurantoína (por ser efectiva para cistitis y preservar las fluoroquinolonas).",
                    "Ciprofloxacina (a pesar de ser de amplio espectro)",
                    "Trimetoprim-SMX"
                  ],
                  "correct": 1,
                  "explanation": "La Nitrofurantoína es terapia de primera línea dirigida para cistitis no complicada, reservando la ciprofloxacina para infecciones sistémicas o complicadas."
                },
                {
                  "id": 230,
                  "question": "En el Caso 4 (UCI) se aísla <em>Klebsiella pneumoniae</em> productora de BLEE con el siguiente antibiograma: Cefotaxima (R), Ceftriaxona (R), Piperacilina/Tazobactam (I), Meropenem (S), Amikacina (S). ¿Cuál es el tratamiento de elección definitivo?",
                  "options": [
                    "Ceftriaxona a doble dosis.",
                    "Meropenem (Carbapenémico).",
                    "Cefotaxima combinada con ampicilina.",
                    "Suspender todo antibiótico."
                  ],
                  "correct": 1,
                  "explanation": "Los carbapenémicos (Meropenem, Imipenem) son la terapia de elección para infecciones graves causadas por enterobacterias productoras de BLEE."
                },
                {
                  "id": 231,
                  "question": "¿Qué significan las siglas MDR, XDR y PDR en la epidemiología de la resistencia bacteriana?",
                  "options": [
                    "MDR: Multidrogorresistente; XDR: Resistencia Extendida; PDR: Panresistencia (resistente a todos los antimicrobianos ensayados).",
                    "MDR: Muerte Rápida; XDR: Rayos X; PDR: Prueba de Rutina.",
                    "MDR: Mutación Directa; XDR: Xantomas; PDR: Proteína D.",
                    "Son nombres comerciales de desinfectantes de UCI."
                  ],
                  "correct": 0,
                  "explanation": "MDR representa insensibilidad a $\\ge 1$ agente en $\\ge 3$ categorías antibióticas; XDR insensibilidad a $\\ge 1$ agente en todas excepto $\\le 2$ categorías; PDR insensibilidad a todos los agentes en todas las categorías."
                },
                {
                  "id": 232,
                  "question": "Si un antibiograma reporta un fármaco como \"Sensible\", ¿en cuál de los siguientes escenarios clínicos estaría CONTRAINDICADO su uso?",
                  "options": [
                    "Cuando el paciente no tiene fiebre.",
                    "Cuando el fármaco no penetra el sitio de infección, el paciente es alérgico al grupo farmacológico o el fármaco es teratogénico en una paciente embarazada.",
                    "Cuando el costo de la tableta es muy bajo.",
                    "Cuando el antibiograma se realizó mediante métodos automatizados."
                  ],
                  "correct": 1,
                  "explanation": "El reporte de laboratorio nunca reemplaza la evaluación de seguridad del paciente (alergias, embarazo, disfunción renal/hepática y penetración tisular)."
                },
                {
                  "id": 233,
                  "question": "¿Cuál de los siguientes es un ERROR COMÚN en la interpretación clínica del antibiograma según la guía?",
                  "options": [
                    "Correlacionar el resultado con la función renal del paciente.",
                    "Elegir el antibiótico con el mayor halo de inhibición sin analizar los puntos de corte ni el contexto del paciente.",
                    "Consultar las guías de desescalamiento terapéutico.",
                    "Verificar el aislamiento en una muestra adecuadamente tomada."
                  ],
                  "correct": 1,
                  "explanation": "Guiarse únicamente por el tamaño milimétrico del halo sin considerar la estandarización por fármaco es un error frecuente en la práctica médica."
                },
                {
                  "id": 234,
                  "question": "¿Qué medida profiláctica y de control hospitalario es fundamental para prevenir la diseminación de cepas de <em>Klebsiella pneumoniae</em> BLEE en una UCI (Caso 4)?",
                  "options": [
                    "Fumigar los pasillos con agua bendita.",
                    "Precauciones de contacto (aislamiento de contacto, uso de bata/guantes, estricto lavado de manos) y programas de optimización de antimicrobianos (PROA).",
                    "Aumentar la temperatura de los aires acondicionados.",
                    "Administrar vancomicina a todos los visitantes."
                  ],
                  "correct": 1,
                  "explanation": "El aislamiento de contacto y la higiene de manos evitan la transmisión cruzada nosocomial mediada por el personal de salud."
                },
                {
                  "id": 235,
                  "question": "Complete la premisa central expresada en los \"Mensajes Clave\" de la guía: \"El antibiograma orienta, no ordena...",
                  "options": [
                    "...y el reporte de laboratorio reemplaza al médico.\"",
                    "...y el paciente está por encima del reporte de laboratorio. La interpretación siempre debe ser clínica y microbiológica\".",
                    "...por lo que no es necesario volver a tomar urocultivos.\"",
                    "...y siempre debe elegirse el antibiótico de más amplio espectro.\""
                  ],
                  "correct": 1,
                  "explanation": "La guía concluye que la decisión terapéutica final debe integrar la condición fisiopatológica del paciente con los datos del laboratorio."
                }
              ]
            },
            {
              "title": "Dianas Terapéuticas y Mecanismos de Acción de los Antibióticos",
              "questions": [
                {
                  "id": 236,
                  "question": "¿Cuál de los siguientes grupos de fármacos ejerce su mecanismo de acción mediante el bloqueo de la síntesis de la pared celular bacteriana?",
                  "options": [
                    "Gentamicina, Amikacina y Tetraciclina",
                    "Penicilinas, Cephalosporinas, Vancomicina y Carbapenémicos",
                    "Ciprofloxacino, Ácido Nalidíxico y Rifampicina",
                    "Sulfonamidas, Trimetoprima y Daptomicina"
                  ],
                  "correct": 1,
                  "explanation": "La inhibición de la síntesis de la pared celular desestabiliza la barrera bacteriana externa; fármacos implicados incluyen cicloserina, vancomicina, bacitracina, penicilinas, cefalosporinas, monobactámicos y carbapenémicos."
                },
                {
                  "id": 237,
                  "question": "En la vía metabólica de síntesis del ácido fólico, ¿cuál es la diana sobre la que actúan directamente las Sulfonamidas?",
                  "options": [
                    "Conversión de Dihidrofolato (DHF) a Tetrahidrofolato (THF)",
                    "Inhibición de la ARN polimerasa dependiente de ADN",
                    "Bloqueo de la incorporación de PABA para la formación de Dihidrofolato (DHF)",
                    "Alteración de la subunidad ribosomal 30S"
                  ],
                  "correct": 2,
                  "explanation": "Las sulfonamidas bloquean la conversión inicial de PABA a DHF, mientras que la trimetoprima actúa en el paso posterior bloqueando la conversión de DHF a THF."
                },
                {
                  "id": 238,
                  "question": "Las Quinolonas (como el Ciprofloxacino y el Ácido Nalidíxico) ejercen su efecto bactericida interfiriendo con:",
                  "options": [
                    "La subunidad ribosomal 50S",
                    "La enzima ADN girasa (Topoisomerasa II)",
                    "La síntesis de ergosterol en la membrana",
                    "La peptidil transferasa en el ARNt"
                  ],
                  "correct": 1,
                  "explanation": "La inactivación de la ADN girasa por las quinolonas y la novobiocina impide la correcta replicación y empaquetamiento del material genético."
                },
                {
                  "id": 239,
                  "question": "¿Qué antibiótico actúa inhibiendo la ARN polimerasa dependiente de ADN, bloqueando así la transcripción genómica?",
                  "options": [
                    "Rifampicina",
                    "Actinomicina",
                    "Cloranfenicol",
                    "Daptomicina"
                  ],
                  "correct": 0,
                  "explanation": "La Rifampicina y las Estreptovaricinas se unen específicamente a la ARN polimerasa dependiente de ADN para interrumpir la transcripción. La actinomicina actúa en la elongación del ARN."
                },
                {
                  "id": 240,
                  "question": "¿Cuál de los siguientes antimicrobianos actúa alterando directamente la estructura y función de la membrana citoplasmática bacteriana?",
                  "options": [
                    "Bacitracina",
                    "Polimixina",
                    "Mupirocina",
                    "Ceftriaxona"
                  ],
                  "correct": 1,
                  "explanation": "La alteración de la estructura de la membrana citoplasmática compromete la viabilidad celular; los fármacos implicados son las Polimixinas (ej. Colistina) y la Daptomicina."
                },
                {
                  "id": 241,
                  "question": "Los aminoglucósidos como la Gentamicina, Amikacina y Estreptomicina se unen de forma específica a:",
                  "options": [
                    "La subunidad ribosomal 50S",
                    "La subunidad ribosomal 30S",
                    "El factor de elongación Tu",
                    "El canal de porinas OmpF"
                  ],
                  "correct": 1,
                  "explanation": "La interferencia con la subunidad 30S altera la lectura del ARN mensajero. Los aminoglucósidos, tetraciclinas y nitrofuranos actúan en la subunidad 30S."
                },
                {
                  "id": 242,
                  "question": "Fármacos como la Eritromicina (macrólidos), Cloranfenicol y Clindamicina comparten como diana celular:",
                  "options": [
                    "La síntesis de ácido fólico",
                    "La subunidad ribosomal 50S",
                    "La ADN girasa",
                    "La pared celular de peptidoglicano"
                  ],
                  "correct": 1,
                  "explanation": "La unión a la subunidad 50S inhibe la formación de enlaces peptídicos durante la traducción proteica; incluye macrólidos, cloranfenicol, clindamicina y lincomicina."
                },
                {
                  "id": 243,
                  "question": "¿Qué fármaco detiene el ensamblaje de aminoácidos mediante la inhibición específica de la función del ARN de transferencia (ARNt)?",
                  "options": [
                    "Mupirocina",
                    "Vancomicina",
                    "Fosfomicina",
                    "Aztreonam"
                  ],
                  "correct": 0,
                  "explanation": "La Mupirocina y la Puromicina actúan inhibiendo la función del ARN de transferencia (ARNt) durante la síntesis proteica."
                },
                {
                  "id": 244,
                  "question": "¿Cuál es la función principal de la enzima PBP (Penicillin-Binding Protein) en la célula bacteriana?",
                  "options": [
                    "Degradar el ADN extraño introducido por fagos",
                    "Catalizar la transpeptidación en la síntesis de la pared celular",
                    "Bombear antibióticos al espacio extracelular",
                    "Sintetizar folato a partir de PABA"
                  ],
                  "correct": 1,
                  "explanation": "Las PBP son enzimas esenciales para el entrecruzamiento de la pared celular de peptidoglicano y constituyen la diana principal de los antibióticos betalactámicos."
                },
                {
                  "id": 245,
                  "question": "La combinación de Sulfametoxazol con Trimetoprima (Cotrimoxazol) es un ejemplo clásico de:",
                  "options": [
                    "Sinergismo por bloqueo secuencial de una vía metabólica",
                    "Antagonismo por competición del mismo sitio diana",
                    "Inactivación enzimática del anillo betalactámico",
                    "Inducción de mutaciones cromosómicas de eflujo"
                  ],
                  "correct": 0,
                  "explanation": "Al inhibir dos pasos consecutivos en la síntesis del tetrahidrofolato (THF), se logra un efecto bactericida sinérgico."
                }
              ]
            },
            {
              "title": "Métodos Diagnósticos de Susceptibilidad Clínica e Interpretación",
              "questions": [
                {
                  "id": 246,
                  "question": "La Concentración Mínima Inhibitoria (CMI) se define formalmente como:",
                  "options": [
                    "La dosis máxima tolerada por el paciente sin presentar efectos adversos",
                    "La menor concentración de un antimicrobiano que impide el crecimiento bacteriano visible <em>in vitro</em>",
                    "El tiempo exacto requerido para eliminar la mitad de la población bacteriana",
                    "El diámetro del halo de inhibición medido en centímetros en una placa de agar"
                  ],
                  "correct": 1,
                  "explanation": "La CMI es el parámetro cuantitativo fundamental en microbiología clínica, definido como la menor cantidad de antibiótico ($\\mu g/mL$) que previene el crecimiento macroscópico en cultivo."
                },
                {
                  "id": 247,
                  "question": "¿Cuál es la diferencia técnica fundamental entre la Concentración Mínima Inhibitoria (CMI) y la Concentración Mínima Bactericida (CMB)?",
                  "options": [
                    "La CMI se realiza en tubos de ensayo y la CMB en placas de Petri únicamente",
                    "La CMI mide la inhibición del crecimiento visible, mientras que la CMB mide la muerte celular (reducción $\\ge 99.9\\%$ de viables)",
                    "La CMB siempre tiene un valor menor que la CMI",
                    "La CMI sólo aplica para virus y la CMB para bacterias"
                  ],
                  "correct": 1,
                  "explanation": "La CMI evalúa la inhibición bacteriostática del crecimiento visible; la CMB requiere repicar las muestras sin crecimiento en medio libre de antibiótico para determinar la letalidad bactericida."
                },
                {
                  "id": 248,
                  "question": "En el método de difusión en disco de Kirby-Bauer, ¿qué medio de cultivo estandarizado se utiliza universalmente para realizar la siembra del inóculo?",
                  "options": [
                    "Agar Sangre de Cordero",
                    "Agar MacConkey",
                    "Agar Mueller-Hinton",
                    "Caldo Sabouraud"
                  ],
                  "correct": 2,
                  "explanation": "El medio de cultivo estandarizado internacionalmente para el antibiograma de difusión en disco es el Agar Mueller-Hinton."
                },
                {
                  "id": 249,
                  "question": "¿Cuál es una ventaja clave del diagnóstico genotípico (ej. PCR) sobre las pruebas fenotípicas tradicionales?",
                  "options": [
                    "Es un método más económico que el agar Kirby-Bauer",
                    "Identifica de forma rápida e independiente la presencia de genes de resistencia específicos (ej. <em>mecA</em>, <em>blaKPC</em>) sin requerir la expresión fenotípica en cultivo",
                    "Determina automáticamente el valor exacto de la CMB",
                    "Mide el nivel de inmunidad celular del hospedador"
                  ],
                  "correct": 1,
                  "explanation": "Los métodos genotípicos detectan directamente la secuencia del gen de resistencia en horas, sin depender de la velocidad de crecimiento de la bacteria ni de la inducción fenotípica."
                },
                {
                  "id": 250,
                  "question": "La presencia del gen <strong>mecA</strong> en <em>Staphylococcus aureus</em> codifica una proteína PBP2a modificada de baja afinidad, lo que se traduce en el laboratorio como:",
                  "options": [
                    "Resistencia a aminoglucósidos exclusivamente",
                    "Resistencia a Meticilina y a prácticamente todos los antibióticos Betalactámicos (MRSA)",
                    "Sensibilidad mejorada a la ampicilina",
                    "Resistencia a fluoroquinolonas por bombas de eflujo"
                  ],
                  "correct": 1,
                  "explanation": "El gen <em>mecA</em> codifica la PBP2a, confiriendo resistencia a la meticilina, oxacilina y a toda la familia de betalactámicos clásicos (penicilinas, cefalosporinas y carbapenémicos)."
                },
                {
                  "id": 251,
                  "question": "Un antibiograma de <em>Enterobacter cloacae</em> muestra el siguiente perfil: Ampicilina ($R$), Cefazolina ($R$), Cefoxitina ($R$), Ceftazidima ($S$), Cefepima ($S$), Meropenem ($S$). Este patrón fenotípico de resistencia es característico de:",
                  "options": [
                    "Producción de Carbapenemasa tipo KPC",
                    "Expresión de una Cefalosporinasa inducible tipo AmpC (intrínseca)",
                    "Resistencia a glucopeptídeos tipo VanA",
                    "Pérdida total de la membrana citoplasmática"
                  ],
                  "correct": 1,
                  "explanation": "Las bacterias del grupo SPACE (<em>Enterobacter</em>, <em>Serratia</em>, etc.) poseen resistencia intrínseca a aminopenicilinas y cefalosporinas de 1.ª/2.ª generación y cefoxitina mediada por la enzima AmpC."
                },
                {
                  "id": 252,
                  "question": "¿Cómo se interpreta la presencia de un <strong>halo de inhibición transparente de gran diámetro</strong> alrededor de un sensidisco de antibiótico en la prueba de Kirby-Bauer?",
                  "options": [
                    "La bacteria es Resistente ($R$) al fármaco",
                    "El antibiótico ha sido inactivado por el medio",
                    "La bacteria es Sensible ($S$) al fármaco, ya que su crecimiento fue inhibido a bajas concentraciones",
                    "La prueba no es válida y debe descartarse"
                  ],
                  "correct": 2,
                  "explanation": "Un halo amplio indica que el antibiótico difundiéndose en el agar logró inhibir el crecimiento bacteriano a distancias donde la concentración es baja, catalogando la cepa como Sensible."
                },
                {
                  "id": 253,
                  "question": "El método cuantitativo de gradiente preformado que utiliza una tira plástica impregnada con concentraciones decrecientes de antibiótico para determinar la CMI directa en placa se denomina:",
                  "options": [
                    "Prueba de coagulasa",
                    "E-test (Epsilómetro)",
                    "PCR en tiempo real",
                    "Reacción de Quellung"
                  ],
                  "correct": 1,
                  "explanation": "El E-test utiliza una tira con un gradiente continuo de antibiótico; la intersección de la zona de inhibición elíptica con la tira marca el valor directo de la CMI."
                },
                {
                  "id": 254,
                  "question": "Si en un informe de CMI para <em>E. coli</em>, la CMI de Meropenem es $\\le 1\\,\\mu g/mL$ y el punto de corte para susceptibilidad es $\\le 2\\,\\mu g/mL$, la cepa se reporta como:",
                  "options": [
                    "Resistente",
                    "Intermedia",
                    "Sensible",
                    "Falso positivo"
                  ],
                  "correct": 2,
                  "explanation": "Cuando el valor medido de la CMI es menor o igual al valor del punto de corte (<em>breakpoint</em>) de susceptibilidad establecido por guías clínicas (CLSI/EUCAST), la bacteria se categoriza como Sensible."
                },
                {
                  "id": 255,
                  "question": "¿Cuál de los siguientes genes es el principal determinante molecular objetivo en la reacción en cadena de la polimerasa (PCR) para la confirmación de carbapenemasas de Clase A en <em>Klebsiella pneumoniae</em>?",
                  "options": [
                    "<em>blaKPC</em>",
                    "<em>vanA</em>",
                    "<em>gyrA</em>",
                    "<em>rpoB</em>"
                  ],
                  "correct": 0,
                  "explanation": "El gen <em>blaKPC</em> codifica la carbapenemasa de <em>Klebsiella pneumoniae</em> (KPC), siendo el blanco molecular primario en PCR para la confirmación de enterobacterias resistentes a carbapenémicos."
                }
              ]
            }
          ]
        },
        {
          "id": "resistencia",
          "title": "Resistencia Antimicrobiana",
          "description": "Comprende el concepto de resistencia antimicrobiana, su base genética y epidemiológica, y los mecanismos bioquímicos y moleculares que usan las bacterias para evadir a los antibióticos.",
          "topics": [
            "Conceptos generales: resistencia intrínseca vs. adquirida",
            "Epidemiología, uso indebido y el enfoque “Una Salud”",
            "Bases genéticas y transferencia horizontal de la resistencia",
            "Mecanismos bioquímicos: inactivación enzimática, alteración del sitio blanco, porinas y bombas de eflujo"
          ],
          "sections": [
            {
              "title": "Conceptos Generales de la Resistencia y Farmacología Antimicrobiana",
              "questions": [
                {
                  "id": 256,
                  "question": "¿Cómo se define el concepto de resistencia antimicrobiana en el contexto microbiológico?",
                  "options": [
                    "La incapacidad del hospedador para sintetizar anticuerpos contra una bacteria.",
                    "La capacidad de los microorganismos para sobrevivir o multiplicarse ante concentraciones de antimicrobianos que normalmente inhibirían o destruirían la cepa.",
                    "La degradación espontánea del antibiótico en el torrente sanguíneo antes de llegar al sitio de infección.",
                    "El aumento del metabolismo del paciente que elimina el fármaco antes de hacer efecto."
                  ],
                  "correct": 1,
                  "explanation": "La resistencia antimicrobiana se entiende como el fenómeno biológico en el cual los microorganismos sobreviven a concentraciones de fármaco previamente efectivas."
                },
                {
                  "id": 257,
                  "question": "¿Cuál es la diferencia fundamental entre resistencia intrínseca y resistencia adquirida?",
                  "options": [
                    "La intrínseca depende de la edad del paciente y la adquirida del peso.",
                    "La intrínseca es inherente y constante en todas las cepas de una especie bacteriana; la adquirida ocurre en cepas previamente sensibles por mutación o adquisición de material genético.",
                    "La intrínseca es producida por virus y la adquirida por bacterias Gram positivas.",
                    "La intrínseca se trata con penicilina y la adquirida con vacunas."
                  ],
                  "correct": 1,
                  "explanation": "La resistencia intrínseca representa una propiedad estructural/metabólica natural de la especie, mientras que la adquirida surge por cambios genéticos en poblaciones previamente susceptibles."
                },
                {
                  "id": 258,
                  "question": "¿Por qué la resistencia antimicrobiana se considera actualmente una amenaza de salud pública global?",
                  "options": [
                    "Porque aumenta el costo de fabricación de las jeringas desechables.",
                    "Porque limita las opciones terapéuticas, incrementa la morbimortalidad, prolonga las estancias hospitalarias y eleva los costos del sistema de salud.",
                    "Porque los antibióticos provocan alergias en más del 80% de la población mundial.",
                    "Porque impide la administración de vacunas infantiles."
                  ],
                  "correct": 1,
                  "explanation": "El aumento incontrolado de microorganismos multirresistentes reduce la eficacia del tratamiento de infecciones comunes, generando fracasos terapéuticos graves a nivel mundial."
                },
                {
                  "id": 259,
                  "question": "¿Cuál de los siguientes grupos de factores favorece directamente el desarrollo y diseminación de la resistencia bacteriana?",
                  "options": [
                    "Uso de agua potable, vacunación oportuna y nutrición balanceada.",
                    "Uso indiscriminado o subóptimo de antibióticos, falta de adherencia al tratamiento, automedicación, prescripción inadecuada y uso no regulado en agricultura/ganadería.",
                    "Ejercicio físico moderado, lavado de manos y esterilización de instrumental.",
                    "Uso de analgésicos esteroideos y desinfectantes alcohólicos."
                  ],
                  "correct": 1,
                  "explanation": "La exposición bacteriana a dosis subinactivantes y la presión de selección ejercida por el uso indebido en humanos y animales son motores principales de la resistencia."
                },
                {
                  "id": 260,
                  "question": "¿Cuál es la diferencia farmacológica entre un antibiótico bactericida y uno bacteriostático?",
                  "options": [
                    "El bactericida mata directamente a las bacterias; el bacteriostático inhibe su crecimiento y replicación, dejando la eliminación final al sistema inmune.",
                    "El bactericida actúa en 24 horas y el bacteriostático en 5 minutos.",
                    "El bactericida solo destruye virus; el bacteriostático destruye hongos.",
                    "El bactericida se administra por vía oral y el bacteriostático por vía intravenosa."
                  ],
                  "correct": 0,
                  "explanation": "Los agentes bactericidas provocan la lisis o muerte celular, mientras que los bacteriostáticos frenen el crecimiento poblacional."
                },
                {
                  "id": 261,
                  "question": "¿A qué se refiere el término \"espectro antibiótico\"?",
                  "options": [
                    "Al rango o variedad de especies bacterianas contra las cuales un antimicrobiano muestra actividad inhibitoria o bactericida.",
                    "Al color de la solución intravenosa del antibiótico.",
                    "Al tiempo que tarda el fármaco en excretarse por vía renal.",
                    "Al número de efectos adversos reportados en la literatura."
                  ],
                  "correct": 0,
                  "explanation": "El espectro define la amplitud de la cobertura microbiana de un fármaco (amplio o reducido)."
                },
                {
                  "id": 262,
                  "question": "¿Cuál es una ventaja clínica clave de utilizar un antibiótico de amplio espectro en las fases iniciales de una infección grave?",
                  "options": [
                    "Elimina la necesidad de tomar muestras de laboratorio.",
                    "Permite cubrir empíricamente múltiples patógenos probables (Gram positivos, Gram negativos) cuando no se ha identificado el agente causal.",
                    "Garantiza la ausencia de efectos secundarios en el paciente.",
                    "Inhibe la aparición de cualquier tipo de alergia."
                  ],
                  "correct": 1,
                  "explanation": "En situaciones de urgencia clínica, la terapia empírica de amplio espectro asegura cobertura inicial contra potenciales patógenos graves mientras se obtiene el urocultivo o hemocultivo."
                },
                {
                  "id": 263,
                  "question": "¿Qué complicación o problema biológico puede generar el uso indiscriminado de antibióticos de amplio espectro?",
                  "options": [
                    "La alteración de la microbiota normal (disbiosis), sobreinfecciones (ej. <em>Clostridioides difficile</em>) y una intensa presión de selección de cepas multirresistentes.",
                    "El aumento de la presión arterial sistémica.",
                    "La paralización irreversible del peristaltismo intestinal.",
                    "La destrucción de los glóbulos rojos por hemólisis autoinmune masiva."
                  ],
                  "correct": 0,
                  "explanation": "La cobertura extendida barre la flora comensal protectora y selecciona microorganismos resistentes opportunistas."
                },
                {
                  "id": 264,
                  "question": "¿Por qué es fundamental realizar un antibiograma antes de ajustar o desescalar un tratamiento antibiótico?",
                  "options": [
                    "Para determinar la concentración de hemoglobina en sangre.",
                    "Para confirmar la susceptibilidad <em>in vitro</em> del patógeno aislado y seleccionar la terapia dirigida más eficaz y de menor espectro.",
                    "Porque reemplaza la necesidad de realizar la anamnesis al paciente.",
                    "Para verificar si el paciente requiere cirugía de urgencia."
                  ],
                  "correct": 1,
                  "explanation": "El antibiograma guía al clínico para pasar de un esquema empírico a un tratamiento específico (terapia dirigida) optimizando la curación y reduciendo la resistencia."
                },
                {
                  "id": 265,
                  "question": "Dentro de los presaberes requeridos para el estudio de los antibiogramas, los mecanismos de intercambio genético entre bacterias incluyen:",
                  "options": [
                    "Mitosis, meiosis y citocinesis.",
                    "Conjugación, transformación y transducción.",
                    "Endocitosis, exocitosis y pinocitosis.",
                    "Fusión de membranas, fagocitosis y fragmentación."
                  ],
                  "correct": 1,
                  "explanation": "La guía señala como presaberes los tres mecanismos de transferencia horizontal de genes en bacterias: conjugación, transformación y transducción."
                }
              ]
            },
            {
              "title": "Mecanismos Moleculares y Bioquímicos de Resistencia Bacteriana",
              "questions": [
                {
                  "id": 266,
                  "question": "¿Qué son las betalactamasas?",
                  "options": [
                    "Proteínas de canal que facilitan la entrada de cefalosporinas.",
                    "Enzimas producidas por bacterias que hidrolizan el anillo betalactámico de los antibióticos, inactivándolos antes de que lleguen a la PBP.",
                    "Ribosomas modificados que resisten a la gentamicina.",
                    "Toxinas secretadas para destruir glóbulos blancos."
                  ],
                  "correct": 1,
                  "explanation": "Las betalactamasas inactivan enzimáticamente los antibióticos betalactámicos al romper la estructura de su anillo betalactámico."
                },
                {
                  "id": 267,
                  "question": "¿Cuál es la diferencia clínica principal entre las Betalactamasas de Espectro Extendido (BLEE) y las Carbapenemasas?",
                  "options": [
                    "Las BLEE inactivan penicilinas y cefalosporinas pero son inhibidas por carbapenémicos; las carbapenemasas hidrolizan adicionalmente a los carbapenémicos (imipenem, meropenem).",
                    "Las BLEE solo afectan a bacterias Gram positivas y las carbapenemasas a hongos.",
                    "Las BLEE se destruyen con calor y las carbapenemasas con acidez.",
                    "Las BLEE son inactivadas por vancomicina y las carbapenemasas por ciprofloxacina."
                  ],
                  "correct": 0,
                  "explanation": "Las BLEE confieren resistencia a cefalosporinas de 3.ª y 4.ª generación, manteniendo sensibilidad a carbapenémicos. Las carbapenemasas destruyen a toda la familia betalactámica, incluidos los carbapenémicos."
                },
                {
                  "id": 268,
                  "question": "El mecanismo de resistencia de <em>Escherichia coli</em> productora de BLEE corresponde a:",
                  "options": [
                    "Disminución de la permeabilidad membranosa.",
                    "Inactivación enzimática del antibiótico.",
                    "Alteración de los ribosomas 50S.",
                    "Expulsión activa por bombas de eflujo MFS."
                  ],
                  "correct": 1,
                  "explanation": "Las enzimas BLEE son un prototipo clásico de inactivación enzimática por lisis del anillo betalactámico."
                },
                {
                  "id": 269,
                  "question": "La resistencia en <em>Staphylococcus aureus</em> resistente a meticilina (MRSA) está mediada genéticamente por el gen <em>mecA</em>, el cual produce:",
                  "options": [
                    "Una enzima que destruye la vancomicina.",
                    "Una alteración del sitio blanco al sintetizar PBP2a, una PBP modificada con muy baja afinidad por los betalactámicos.",
                    "Una bomba de eflujo específica para ampicilina.",
                    "La pérdida total de la pared celular."
                  ],
                  "correct": 1,
                  "explanation": "MRSA modifica el sitio blanco (PBP2a), impidiendo que cualquier betalactámico estándar (excepto cefalosporinas de 5.ª generación) se una eficazmente."
                },
                {
                  "id": 270,
                  "question": "El mecanismo por el cual <em>Enterococcus sp.</em> resistente a vancomicina (VRE) adquiere resistencia consiste en:",
                  "options": [
                    "Inactivación por acetilación del fármaco.",
                    "Alteración del sitio blanco mediante la modificación del precursor peptidoglicano D-Ala-D-Ala a D-Ala-D-Lactato o D-Ala-D-Serina.",
                    "Expresión de porinas de alto peso molecular.",
                    "Formación de cápsula lipídica."
                  ],
                  "correct": 1,
                  "explanation": "VRE reprograma la síntesis de la pared celular cambiando el aminoácido terminal diana, lo que reduce la afinidad de la vancomicina."
                },
                {
                  "id": 271,
                  "question": "¿Qué fenómeno explica la resistencia múltiple en <em>Pseudomonas aeruginosa</em> cuando cierra o silencia la porina OmpD/OprD?",
                  "options": [
                    "Inactivación enzimática intracelular.",
                    "Disminución de la permeabilidad de la membrana externa.",
                    "Alteración de la ADN girasa.",
                    "Bloqueo de la síntesis de ácido fólico."
                  ],
                  "correct": 1,
                  "explanation": "La disminución de permeabilidad impide la entrada o difusión pasiva del fármaco (ej. carbapenémicos como imipenem) al espacio periplásmico."
                },
                {
                  "id": 272,
                  "question": "¿En qué consiste el mecanismo de resistencia mediante \"Bombas de Eflujo\"?",
                  "options": [
                    "En la secreción de ácido láctico para denaturar el antibiótico en el tejido.",
                    "En sistemas de transporte proteico acoplados a energía que expulsan activamente el antibiótico desde el citoplasma/periplasmo hacia el exterior celular.",
                    "En la absorción del antibiótico dentro de vacuolas digestivas.",
                    "En la transferencia de porinas a bacterias vecinas."
                  ],
                  "correct": 1,
                  "explanation": "Las bombas de eflujo reducen la concentración intracelular del antibiótico por debajo de su umbral de eficacia."
                },
                {
                  "id": 273,
                  "question": "<em>Pseudomonas aeruginosa</em> multirresistente combina habitualmente varios mecanismos de resistencia. ¿Cuál de los siguientes pares de mecanismos destaca en este patógeno?",
                  "options": [
                    "Inactivación de ribosomas 30S y esporulación.",
                    "Bombas de eflujo (ej. MexAB-OprM) y disminución de la permeabilidad (pérdida de porinas).",
                    "Síntesis de folato sintético y mitosis acelerada.",
                    "Fagocitosis de amikacina y mutación de la miosina."
                  ],
                  "correct": 1,
                  "explanation": "<em>P. aeruginosa</em> es un patógeno oportunista caracterizado por la sobreexpresión de bombas de eflujo multidroga combinada con porinas restringidas."
                },
                {
                  "id": 274,
                  "question": "¿Cuál de los siguientes mecanismos de resistencia altera la estructura de la enzima bacteriana diana impidiendo la unión del antibiótico sin destruir químicamente la molécula del fármaco?",
                  "options": [
                    "Inactivación enzimática.",
                    "Alteración del sitio blanco (sitio de acción).",
                    "Degradación proteolítica.",
                    "Neutralización con sodio."
                  ],
                  "correct": 1,
                  "explanation": "La alteración del sitio blanco cambia la conformación tridimensional de la proteína o ARN diana, reduciendo la afinidad sin alterar la molécula de antibiótico."
                },
                {
                  "id": 275,
                  "question": "Complete la asociación correcta entre la bacteria y su mecanismo de resistencia insigne presentado en la guía:",
                  "options": [
                    "<em>E. coli</em> BLEE $\\rightarrow$ Disminución de permeabilidad.",
                    "<em>S. aureus</em> MRSA $\\rightarrow$ Alteración del sitio blanco (PBP2a).",
                    "<em>Enterococcus</em> VRE $\\rightarrow$ Inactivación enzimática.",
                    "<em>P. aeruginosa</em> $\\rightarrow$ Transformación fágica exclusiva."
                  ],
                  "correct": 1,
                  "explanation": "MRSA es el ejemplo representativo de modificación del sitio blanco por expresión del gen <em>mecA</em> que codifica PBP2a."
                }
              ]
            },
            {
              "title": "Epidemiología, Uso Indebido y el Enfoque “Una Salud” (One Health)",
              "questions": [
                {
                  "id": 276,
                  "question": "¿En qué año descubrió Alexander Fleming el primer antibiótico (Penicilina) al observar la inhibición bacteriana producida por el hongo <em>Penicillium</em>?",
                  "options": [
                    "1905",
                    "1928",
                    "1941",
                    "1956"
                  ],
                  "correct": 1,
                  "explanation": "Alexander Fleming descubrió la penicilina en 1928 tras observar que el moho <em>Penicillium</em> producía una sustancia que lisaba cultivos bacterianos."
                },
                {
                  "id": 277,
                  "question": "Según los datos epidemiológicos presentados, ¿qué porcentaje aproximado del uso global de antibióticos corresponde al consumo humano?",
                  "options": [
                    "10%",
                    "30%",
                    "50%",
                    "70%"
                  ],
                  "correct": 1,
                  "explanation": "Los seres humanos consumen aproximadamente el 30% de los antibióticos producidos mundialmente; el 70% restante se emplea en la ganadería, acuicultura y agricultura."
                },
                {
                  "id": 278,
                  "question": "¿Cuál es el propósito central del enfoque \"Una Salud\" (<em>One Health</em>) promovido por la OMS?",
                  "options": [
                    "Prohibir por completo el uso de antibióticos en seres humanos",
                    "Integrar esfuerzos multisectoriales entre salud humana, veterinaria, ganadería y medio ambiente",
                    "Sustituir el uso de antibióticos por tratamientos exclusivamente virales",
                    "Financiar la producción masiva de antibióticos de primera generación"
                  ],
                  "correct": 1,
                  "explanation": "El enfoque \"Una Salud\" reconoce la interconexión entre la salud humana, animal y el medio ambiente para combatir el uso indiscriminado de antimicrobianos en todos los sectores."
                },
                {
                  "id": 279,
                  "question": "¿Qué fenómeno económico-farmacéutico ha agravado la crisis de la resistencia antimicrobiana en las últimas décadas?",
                  "options": [
                    "El exceso de patentes de antibióticos de bajo costo",
                    "La baja tasa de retorno de inversión que lleva a que <5% de los productos en I+D sean antibióticos",
                    "La prohibición mundial del uso de vancomicina en hospitales",
                    "El cierre de todos los laboratorios de diagnóstico fenotípico"
                  ],
                  "correct": 1,
                  "explanation": "Según la OMS (2019), menos del 5% de los productos en investigación y desarrollo farmacéutico corresponden a antibióticos, debido a los altos costos y baja rentabilidad económica."
                },
                {
                  "id": 280,
                  "question": "Procedimientos médicos avanzados como trasplantes de órganos, hemodiálisis y prótesis articulares dependen críticamente de:",
                  "options": [
                    "El uso de antiinflamatorios esteroideos",
                    "La disponibilidad de antimicrobianos eficaces para prevenir y tratar infecciones oportunistas",
                    "La erradicación total de la microbiota comensal del paciente",
                    "La administración de altas dosis de vitamina C"
                  ],
                  "correct": 1,
                  "explanation": "Sin antibióticos eficaces, procedimientos invasivos cotidianos (trasplantes, diálisis, atención neonatal, cirugía protésica) conllevan un riesgo prohibitivo de mortalidad por sepsis resistente."
                },
                {
                  "id": 281,
                  "question": "En mayo de 2020, el alcance de la campaña de la OMS frente a la farmacorresistencia se amplió formalmente de \"antibióticos\" a:",
                  "options": [
                    "Exclusivamente vacunas bacterianas",
                    "Antimicrobianos en general (incluyendo antivirales, antimicóticos y antiprotazoarios)",
                    "Desinfectantes industriales de uso hospitalario",
                    "Suplementos nutricionales para ganado"
                  ],
                  "correct": 1,
                  "explanation": "En 2020 la OMS amplió el alcance del plan estratégico a todos los antimicrobianos en su conjunto, reconociendo la resistencia emergente en hongos, virus y parásitos."
                },
                {
                  "id": 282,
                  "question": "¿Cuál de los siguientes factores NO es un desencadenante directo del aumento de bacterias resistentes?",
                  "options": [
                    "Exposición a niveles subóptimos o concentraciones infraterapéuticas de antibióticos",
                    "Cumplimiento estricto y dosificación completa de las prescripciones médicas",
                    "Empleo de antibióticos en alimentos y piensos para animales como promotores de crecimiento",
                    "Deficiencias en el control de calidad en la fabricación o uso de fármacos caducados"
                  ],
                  "correct": 1,
                  "explanation": "La adherencia adecuada al tratamiento elimina la infección y previene la selección de mutantes resistentes. La exposición subóptima y el uso en alimentos sí favorecen la RAM."
                },
                {
                  "id": 283,
                  "question": "¿Qué patógeno zoonótico multirresistente fue detectado en personas que consumieron carne de vacuno alimentado con antibióticos profilácticos?",
                  "options": [
                    "<em>Mycobacterium tuberculosis</em>",
                    "<em>Salmonella typhi</em>",
                    "<em>Streptococcus pneumoniae</em>",
                    "<em>Treponema pallidum</em>"
                  ],
                  "correct": 1,
                  "explanation": "En la presentación se destaca la presencia de <em>Salmonella typhi</em> multirresistente vinculada al consumo de carne de vacuno alimentado con pienso cargado de antibióticos."
                },
                {
                  "id": 284,
                  "question": "¿En qué década comenzó a reportarse la resistencia a la Meticilina en cepas de <em>Staphylococcus aureus</em> (MRSA)?",
                  "options": [
                    "Década de 1940",
                    "Década de 1960 (1961)",
                    "Década de 1990",
                    "Año 2015"
                  ],
                  "correct": 1,
                  "explanation": "La meticilina fue introducida en 1960 y la primera resistencia (<em>MRSA</em>) fue reportada muy poco después, en 1961."
                },
                {
                  "id": 285,
                  "question": "El principio biológico que explica la dominancia progresiva de bacterias resistentes en presencia de un antibiótico es:",
                  "options": [
                    "Generación espontánea",
                    "Selección natural de mutantes o cepas con ventaja adaptativa",
                    "Inactivación del sistema inmunológico humoral",
                    "Transferencia inversa de ARN a ADN cromosómico"
                  ],
                  "correct": 1,
                  "explanation": "El antibiótico actúa como una presión de selección: elimina las bacterias sensibles (población susceptible) y permite la supervivencia y proliferación de las bacterias resistentes."
                }
              ]
            },
            {
              "title": "Bases Genéticas y Mecanismos de Transmisión de la Resistencia",
              "questions": [
                {
                  "id": 286,
                  "question": "La resistencia en la cual <strong>todas</strong> las cepas de una misma especie bacteriana son inmunes a un antibiótico debido a características estructurales nativas se denomina:",
                  "options": [
                    "Resistencia Adquirida",
                    "Resistencia Intrínseca (o Natural)",
                    "Resistencia Transducida",
                    "Resistencia Heterogénea"
                  ],
                  "correct": 1,
                  "explanation": "La resistencia intrínseca es un mecanismo permanente, constante en una misma especie, determinado genéticamente e independiente de la presencia del fármaco."
                },
                {
                  "id": 287,
                  "question": "¿Por qué las especies del género <em>Mycoplasma</em> presentan resistencia intrínseca absoluta a los antibióticos betalactámicos?",
                  "options": [
                    "Porque producen grandes cantidades de carbapenemasas",
                    "Porque poseen bombas de eflujo de alta velocidad",
                    "Porque carecen naturalmente de pared celular de peptidoglicano",
                    "Porque su ADN es impermeable a las moléculas orgánicas"
                  ],
                  "correct": 2,
                  "explanation": "Al no poseer pared celular (peptidoglicano), los fármacos cuya diana es la pared celular (como penicilinas o vancomicina) no tienen sitio de acción."
                },
                {
                  "id": 288,
                  "question": "La transferencia de genes de resistencia mediada por la infección de un virus bacteriano o virus bacteriófago se conoce como:",
                  "options": [
                    "Transformación",
                    "Transducción",
                    "Conjugación",
                    "Mutación puntual"
                  ],
                  "correct": 1,
                  "explanation": "La transducción bacteriana ocurre cuando un bacteriófago empaca fragmentos de ADN bacteriano (incluyendo genes de resistencia) y los inyecta en una célula receptora."
                },
                {
                  "id": 289,
                  "question": "¿Qué mecanismo de transferencia horizontal requiere el contacto físico directo entre una célula donadora y una receptora a través de un pili sexual?",
                  "options": [
                    "Conjugación",
                    "Transformación",
                    "Transducción",
                    "Replicación semi-conservativa"
                  ],
                  "correct": 0,
                  "explanation": "La conjugación es el mecanismo principal de propagación epidémica de plásmidos de resistencia que requiere contacto célula-célula."
                },
                {
                  "id": 290,
                  "question": "El fenómeno por el cual una bacteria capta fragmentos de ADN desnudo presente en el medio extracelular e incorpora los genes de resistencia a su genoma es:",
                  "options": [
                    "Transducción lisogénica",
                    "Transformación",
                    "Transposición",
                    "Conjugación plasmídica"
                  ],
                  "correct": 1,
                  "explanation": "La transformación consiste en la captación de ADN libre o liberado por lisis de bacterias donadoras e integración en el cromosoma receptor."
                },
                {
                  "id": 291,
                  "question": "Las mutaciones cromosómicas en los genes <em>gyrA</em> y <em>gyrB</em> que alteran la enzima ADN girasa generan resistencia adquirida que se transmite de forma:",
                  "options": [
                    "Horizontal exclusivamente por bacteriófagos",
                    "Vertical a la progenie durante la división celular",
                    "Esporádica sin replicación genómica",
                    "Cruzada con macrólidos y aminoglucósidos"
                  ],
                  "correct": 1,
                  "explanation": "Las mutaciones cromosómicas se heredan de manera vertical de la célula madre a todas sus células hijas en la división celular."
                },
                {
                  "id": 292,
                  "question": "El concepto de <strong>\"Resistoma\"</strong> se refiere a:",
                  "options": [
                    "El número total de antibióticos disponibles en el mercado farmacéutico",
                    "El conjunto de todos los genes de resistencia, sus precursores y genes metabólicos con potencialidad de resistencia presentes en las bacterias",
                    "El halo de inhibición medido en un antibiograma Kirby-Bauer",
                    "La concentración plasmática máxima alcanzada por un antimicrobiano"
                  ],
                  "correct": 1,
                  "explanation": "El resistoma engloba la totalidad de genes de resistencia (intrínsecos, adquiridos, determinantes clásicos y prototipos metabólicos) en el ecosistema microbiano."
                },
                {
                  "id": 293,
                  "question": "¿Cuál es un ejemplo de resistencia adquirida mediada por adquisición de un plásmido que codifica enzimas inactivadoras?",
                  "options": [
                    "Resistencia intrínseca de <em>Pseudomonas</em> a la ampicilina",
                    "Presencia de la enzima Cloranfenicol Acetiltransferasa o variantes de betalactamasas tipo CMY",
                    "Ausencia de porinas en micobacterias",
                    "Pared celular engrosada nativa en Gram positivos"
                  ],
                  "correct": 1,
                  "explanation": "La inactivación enzimática codificada en plásmidos (ej. acetiltransferasas o betalactamasas plasmídicas) es un prototipo clásico de resistencia adquirida por HGT."
                },
                {
                  "id": 294,
                  "question": "¿Qué elemento genético móvil destaca por su capacidad de \"saltar\" o insertarse entre el cromosoma bacteriano y los plásmidos?",
                  "options": [
                    "Porinas",
                    "Transposones",
                    "Ribosomas 30S",
                    "Unidades Svedberg"
                  ],
                  "correct": 1,
                  "explanation": "Los transposones y casetes genéticos (integrones) son elementos móviles capaces de transponerse entre el ADN cromosómico y plásmidos."
                },
                {
                  "id": 295,
                  "question": "La difusión de genes de resistencia entre diferentes especies o géneros bacterianos no emparentados es una característica fundamental de:",
                  "options": [
                    "La replicación cromosómica vertical",
                    "La Transferencia Horizontal de Genes (HGT)",
                    "La selección de mutantes puntuales de la ADN polimerasa",
                    "La síntesis constitutiva del peptidoglicano"
                  ],
                  "correct": 1,
                  "explanation": "La HGT permite la diseminación rápida e inter-especie de determinantes de resistencia a través de plásmidos conjugativos y transposones."
                }
              ]
            },
            {
              "title": "Mecanismos Bioquímicos y Celulares de Resistencia Antibacteriana",
              "questions": [
                {
                  "id": 296,
                  "question": "¿Cuál de las siguientes opciones describe el mecanismo bioquímico por el cual las Betalactamasas inactivan a la penicilina?",
                  "options": [
                    "Fosforilación del grupo hidroxilo del antibiótico",
                    "Hidrólisis enzimática del enlace amida del anillo betalactámico",
                    "Expulsión activa de la molécula a través de bombas MFS",
                    "Metilación del citocromo p450 bacteriano"
                  ],
                  "correct": 1,
                  "explanation": "Las betalactamasas rompen catalíticamente el enlace amida del anillo betalactámico, impidiendo que el antibiótico se una a las PBP."
                },
                {
                  "id": 297,
                  "question": "Dentro de la Clasificación de Ambler, las Metalo-betalactamasas (Clase B) se caracterizan estructuralmente por requerir en su sitio activo:",
                  "options": [
                    "Un residuo de Serina",
                    "Iones Zinc ($Zn^{2+}$)",
                    "Ácido clavulánico",
                    "Magnesio extracelular"
                  ],
                  "correct": 1,
                  "explanation": "Las enzimas Clase B (NDM, VIM, IMP) utilizan iones de Zinc en su centro catalítico (metaloenzimas) y son inhibidas in vitro por quelantes como el EDTA."
                },
                {
                  "id": 298,
                  "question": "¿Qué enzima pertenece a las Betalactamasas de Clase A de Ambler y es una carbapenemasa de amplia diseminación nosocomial?",
                  "options": [
                    "NDM-1",
                    "KPC ( <em>Klebsiella pneumoniae</em> carbapenemase)",
                    "AmpC",
                    "OXA-48"
                  ],
                  "correct": 1,
                  "explanation": "KPC es el prototipo de carbapenemasa de Clase A (Serina-betalactamasa), mientras que NDM es Clase B, AmpC es Clase C y OXA-48 es Clase D."
                },
                {
                  "id": 299,
                  "question": "¿Cuál de los siguientes inhibidores de betalactamasa NO logra neutralizar la actividad de una Metalo-betalactamasa de Clase B (como NDM o VIM)?",
                  "options": [
                    "EDTA",
                    "Avibactam",
                    "Tanto Ácido Clavulánico como Tazobactam y Avibactam",
                    "Ningún agente sintético existente"
                  ],
                  "correct": 2,
                  "explanation": "Las metalo-betalactamasas de Clase B no son inhibidas por los inhibidores basados en serina (clavulanato, sulbactam, tazobactam, avibactam)."
                },
                {
                  "id": 300,
                  "question": "El cierre, silenciamiento o disminución en el número de canales de porinas en la membrana externa de bacterias Gram negativas resulta en:",
                  "options": [
                    "Inactivación enzimática de macrólidos",
                    "Disminución de la permeabilidad y restricción del acceso del fármaco al espacio periplásmico",
                    "Aumento de la tasa de mutación en la ADN polimerasa III",
                    "Lisis celular espontánea por presión osmótica"
                  ],
                  "correct": 1,
                  "explanation": "La regulación negativa de porinas es un mecanismo que impide el ingreso físico de antibióticos hidrofílicos (betalactámicos, fluoroquinolonas) al interior celular."
                },
                {
                  "id": 301,
                  "question": "Las Bombas de Eflujo Activo permiten a las bacterias resistir a los antibióticos mediante:",
                  "options": [
                    "La destrucción química de la molécula dentro del citoplasma",
                    "La expulsión continua del fármaco desde el citoplasma/espacio periplásmico hacia el exterior celular",
                    "El engrosamiento de la capa de peptidoglicano",
                    "La síntesis de proteínas sustitutas"
                  ],
                  "correct": 1,
                  "explanation": "Las bombas de eflujo son complejos proteicos transmembrana que bombean activamente los antimicrobianos hacia afuera, manteniendo la concentración intracelular por debajo del umbral tóxico."
                },
                {
                  "id": 302,
                  "question": "La modificación de precursores del peptidoglicano alterando la secuencia diana de <strong>D-Alanil-D-Alanina</strong> a <strong>D-Alanil-D-Lactato</strong> confiere resistencia de alto nivel a:",
                  "options": [
                    "Gentamicina",
                    "Vancomicina",
                    "Ciprofloxacino",
                    "Colistina"
                  ],
                  "correct": 1,
                  "explanation": "La alteración de los precursores terminales D-Ala-D-Ala a D-Ala-D-Lac o D-Ala-D-Ser reduce drásticamente la afinidad de unión de los glucopeptídeos como la vancomicina (mecanismo <em>vanA/vanB</em> en enterococos)."
                },
                {
                  "id": 303,
                  "question": "Las enzimas de la familia <strong>BLEE</strong> (Betalactamasas de Espectro Extendido, ej. CTX-M, SHV, TEM) se clasifican principalmente en el grupo de Ambler:",
                  "options": [
                    "Clase A",
                    "Clase B",
                    "Clase C",
                    "Clase D"
                  ],
                  "correct": 0,
                  "explanation": "Las BLEE típicas son variantes mutadas de las enzimas TEM y SHV, o la familia CTX-M, todas pertenecientes a la Clase A de Ambler (Serina-betalactamasas)."
                },
                {
                  "id": 304,
                  "question": "Las enzimas de Clase C de Ambler (AmpC) se caracterizan clínicamente por:",
                  "options": [
                    "Ser totalmente inhibidas por el ácido clavulánico",
                    "Conferir resistencia a penicilinas, cefalosporinas de 1.ª, 2.ª y 3.ª generación y cefoxitina, siendo resistentes a inhibidores clásicos",
                    "Ser inactivadas exclusivamente por el zinc",
                    "Hidrolizar unicamente vancomicina"
                  ],
                  "correct": 1,
                  "explanation": "Las cefalosporinasas AmpC (Clase C) no son inhibidas por ácido clavulánico, sulbactam ni tazobactam, e hidrolizan cefalosporinas y cephamicinas (cefoxitina)."
                },
                {
                  "id": 305,
                  "question": "¿De qué manera los biofilmes (<em>biopelículas</em>) bacterianos protegen a patógenos como <em>Vibrio parahaemolyticus</em> o <em>Pseudomonas aeruginosa</em> contra antibióticos como los aminoglucósidos?",
                  "options": [
                    "Degradando el ADN cromosómico del hospedador",
                    "Formando una matriz extracelular (EPS, eDNA, proteínas) que actúa como barrera física de difusión y sequestra moléculas cargadas",
                    "Alterando la temperatura del tejido",
                    "Transformando los antibióticos en nutrientes celulares"
                  ],
                  "correct": 1,
                  "explanation": "La matriz de exopolisacáridos (EPS), eDNA y proteínas atrapa mecánicamente y retrasa la penetración de antibióticos cargados (como aminoglucósidos), además de albergar bacterias en estado de latencia (<em>persistentes</em>)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "semana3",
      "label": "SEMANA 03",
      "icon": "＋",
      "colorClass": "week-muted",
      "title": "Próximamente",
      "description": "Esta sección queda preparada para agregar los siguientes temas del curso.",
      "modules": []
    }
  ]
};

// ============================================================
// FARMACOSTUDY — LÓGICA DE LA APLICACIÓN
// ============================================================

// --- Utilidades de acceso a datos ---
function findModule(weekId, moduleId) {
  const week = courseData.weeks.find(w => w.id === weekId);
  if (!week) return null;
  const mod = week.modules.find(m => m.id === moduleId);
  return mod ? { week, mod } : null;
}

function countTotalModules() {
  return courseData.weeks.reduce((acc, w) => acc + w.modules.length, 0);
}

function countTotalQuestions() {
  let total = 0;
  courseData.weeks.forEach(w => w.modules.forEach(m => m.sections.forEach(s => total += s.questions.length)));
  return total;
}

function countModuleQuestions(mod) {
  return mod.sections.reduce((acc, s) => acc + s.questions.length, 0);
}

// --- Render dinámico de la grilla de semanas y módulos ---
function renderWeeks() {
  const grid = document.getElementById("weekGrid");
  grid.innerHTML = "";

  courseData.weeks.forEach(week => {
    const article = document.createElement("article");
    article.className = `week-card ${week.colorClass}`;

    const hasModules = week.modules.length > 0;
    const useGrid2 = week.modules.length > 3;

    let moduleListHTML = "";
    if (hasModules) {
      moduleListHTML = `
        <div class="module-list ${useGrid2 ? "grid-2-col" : ""}">
          ${week.modules.map((m, idx) => `
            <button class="module-item" data-week="${week.id}" data-module="${m.id}">
              <span class="module-index">${String(idx + 1).padStart(2, "0")}</span>
              <span>${m.title}</span>
              <span>→</span>
            </button>
          `).join("")}
        </div>`;
    } else {
      moduleListHTML = `<button class="disabled-btn" disabled>Contenido pendiente</button>`;
    }

    article.innerHTML = `
      <div class="week-top">
        <span class="week-number">${week.label}</span>
        <span class="week-icon">${week.icon}</span>
      </div>
      <h3>${week.title}</h3>
      <p>${week.description}</p>
      ${moduleListHTML}
    `;
    grid.appendChild(article);
  });

  document.querySelectorAll(".module-item").forEach(button => {
    button.addEventListener("click", () => openModule(button.dataset.week, button.dataset.module));
  });
}

// --- Actualización de encabezado de estadísticas ---
function renderStats() {
  const weeksWithContent = courseData.weeks.filter(w => w.modules.length > 0).length;
  document.getElementById("statWeeks").textContent = weeksWithContent;
  document.getElementById("statModules").textContent = countTotalModules();
  document.getElementById("statQuestions").textContent = `${countTotalQuestions()}+`;
}

// --- GESTIÓN DEL MODAL ---
const modal = document.getElementById("moduleModal");
const modalWeek = document.getElementById("modalWeek");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTopics = document.getElementById("modalTopics");
const modalQuestionsList = document.getElementById("modalQuestionsList");
const modalQuizCount = document.getElementById("modalQuizCount");
const closeModalBtn = document.getElementById("closeModal");
const completeBtn = document.getElementById("completeBtn");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-bottom span");
const progressPercent = document.querySelector(".progress-bottom strong");

let completed = JSON.parse(localStorage.getItem("farmacostudy-completed") || "[]");
let currentModuleKey = null;

function moduleKey(weekId, moduleId) {
  return `${weekId}::${moduleId}`;
}

function updateProgress() {
  const total = countTotalModules();
  const percentage = total ? Math.round((completed.length / total) * 100) : 0;
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${completed.length} de ${total} módulos completados`;
  progressPercent.textContent = `${percentage}%`;

  document.querySelectorAll(".module-item").forEach(button => {
    const key = moduleKey(button.dataset.week, button.dataset.module);
    const checkSpan = button.querySelector("span:last-child");
    if (completed.includes(key)) {
      button.style.background = "#e9f8ef";
      button.style.borderColor = "#b9e5c8";
      checkSpan.textContent = "✓";
    } else {
      button.style.background = "";
      button.style.borderColor = "";
      checkSpan.textContent = "→";
    }
  });
}

function openModule(weekId, moduleId) {
  const found = findModule(weekId, moduleId);
  if (!found) return;
  const { week, mod } = found;
  currentModuleKey = moduleKey(weekId, moduleId);

  modalWeek.textContent = `${week.label} · ${mod.title.toUpperCase()}`;
  modalTitle.textContent = mod.title;
  modalDescription.textContent = mod.description;
  modalTopics.innerHTML = mod.topics.map(topic => `<li>${topic}</li>`).join("");

  const totalQ = countModuleQuestions(mod);
  modalQuizCount.textContent = `${totalQ} preguntas en ${mod.sections.length} secciones`;

  renderModuleQuiz(mod, modalQuestionsList);

  completeBtn.textContent = completed.includes(currentModuleKey) ? "Marcar como no completado" : "Marcar como completado ✓";
  modal.classList.remove("hidden");
  document.querySelector(".modal-box").scrollTop = 0;
}

closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.add("hidden");
});

completeBtn.addEventListener("click", () => {
  if (completed.includes(currentModuleKey)) {
    completed = completed.filter(k => k !== currentModuleKey);
  } else {
    completed.push(currentModuleKey);
  }
  localStorage.setItem("farmacostudy-completed", JSON.stringify(completed));
  updateProgress();
  completeBtn.textContent = completed.includes(currentModuleKey) ? "Marcar como no completado" : "Marcar como completado ✓";
});

// --- MENÚ RESPONSIVE ---
document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  const isOpen = nav.classList.toggle("nav-open");
  nav.style.display = isOpen ? "flex" : "none";
});

// --- RENDER DE PREGUNTAS POR SECCIÓN (ACORDEÓN) ---
function renderModuleQuiz(mod, container) {
  container.innerHTML = "";
  mod.sections.forEach((section, sIdx) => {
    const details = document.createElement("details");
    details.className = "quiz-accordion";
    if (sIdx === 0) details.open = true;

    const summary = document.createElement("summary");
    summary.innerHTML = `<span>${section.title}</span><span class="accordion-count">${section.questions.length} preguntas</span>`;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "quiz-accordion-body";
    renderQuestionsList(section.questions, body);
    details.appendChild(body);

    container.appendChild(details);
  });
}

// --- FUNCIÓN PARA RENDERIZAR PREGUNTAS INTERACTIVAS ---
function renderQuestionsList(questions, container) {
  container.innerHTML = "";
  questions.forEach((q, idx) => {
    const qCard = document.createElement("div");
    qCard.className = "question-card";

    const optionsHTML = q.options.map((opt, oIdx) =>
      `<button class="option-btn" data-qid="${q.id}" data-oidx="${oIdx}" data-correct="${q.correct}">
        <span>${opt}</span>
       </button>`
    ).join("");

    const hasExplanation = q.explanation && q.explanation.trim().length > 0;

    qCard.innerHTML = `
      <div class="question-title"><span class="q-number">${idx + 1}.</span> ${q.question}</div>
      <div class="options-grid">${optionsHTML}</div>
      ${hasExplanation ? `<div class="justification-box hidden" id="just-${q.id}"><strong>Explicación:</strong> ${q.explanation}</div>` : ""}
    `;
    container.appendChild(qCard);
  });

  container.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const qid = btn.dataset.qid;
      const correctIdx = parseInt(btn.dataset.correct, 10);
      const selectedIdx = parseInt(btn.dataset.oidx, 10);
      const optionsGrid = btn.parentElement;
      const buttons = optionsGrid.querySelectorAll(".option-btn");

      buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) b.classList.add("correct");
        else if (idx === selectedIdx) b.classList.add("incorrect");
      });

      const justBox = document.getElementById(`just-${qid}`);
      if (justBox) justBox.classList.remove("hidden");
    });
  });
}

// --- INICIALIZACIÓN ---
renderStats();
renderWeeks();
updateProgress();
