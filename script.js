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
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 426,
                  "question": "Comparando una mutación en un protooncogén con una en un gen supresor de tumor, ¿qué predice el modelo de los \"dos eventos\" de Knudson sobre el número de alelos que deben alterarse en cada caso?",
                  "options": [
                    "En ambos casos basta con alterar un solo alelo",
                    "En el protooncogén basta con alterar un alelo (dominante); en el supresor de tumor deben alterarse ambos alelos (recesivo)",
                    "En el supresor de tumor basta con alterar un alelo; en el protooncogén deben alterarse ambos",
                    "Ninguno de los dos requiere alteración alélica, solo cambios epigenéticos"
                  ],
                  "correct": 1,
                  "explanation": "Los oncogenes actúan de forma dominante (una copia mutada activada basta), mientras que los supresores de tumor son recesivos y requieren la inactivación de ambos alelos."
                },
                {
                  "id": 427,
                  "question": "Comparando la amplificación génica con la translocación cromosómica como mecanismos de activación de protooncogenes, ¿qué diferencia predice sobre el número de copias del gen final?",
                  "options": [
                    "Ambas siempre aumentan el número de copias del gen por igual",
                    "La amplificación aumenta directamente el número de copias del gen; la translocación reubica o fusiona el gen sin necesariamente aumentar su número de copias",
                    "La translocación siempre aumenta más copias que la amplificación",
                    "Ninguna de las dos afecta el número de copias génicas"
                  ],
                  "correct": 1,
                  "explanation": "La amplificación produce múltiples copias de una secuencia (como en HER2); la translocación reubica material genético o forma genes de fusión, sin implicar necesariamente más copias."
                },
                {
                  "id": 428,
                  "question": "Al comparar una mutación \"conductora\" con una \"pasajera\" dentro del mismo tumor, ¿qué se predice sobre su presencia en las distintas regiones o subclonas tumorales?",
                  "options": [
                    "Ambas están presentes por igual en todas las células tumorales",
                    "La conductora suele estar presente en todas las células (evento fundador); la pasajera puede estar restringida a subclonas específicas",
                    "La pasajera está siempre presente en todas las células y la conductora no",
                    "Ninguna de las dos se relaciona con la heterogeneidad tumoral"
                  ],
                  "correct": 1,
                  "explanation": "Las mutaciones conductoras confieren ventaja selectiva desde etapas tempranas y se fijan en toda la población tumoral; las pasajeras surgen después y quedan restringidas a subclonas."
                },
                {
                  "id": 429,
                  "question": "Si una célula tumoral pierde la función de la enzima MGMT, ¿qué efecto se predice sobre su respuesta a agentes alquilantes que dañan el ADN mediante metilación (como la temozolomida)?",
                  "options": [
                    "Mayor resistencia, porque MGMT no participa en la reparación del daño alquilante",
                    "Mayor sensibilidad al fármaco, ya que la célula pierde la capacidad de revertir la alquilación del ADN",
                    "No hay ningún efecto, MGMT es irrelevante para este tipo de daño",
                    "La célula se vuelve completamente inmune al fármaco"
                  ],
                  "correct": 1,
                  "explanation": "MGMT revierte la alquilación del ADN; su pérdida impide reparar el daño causado por agentes alquilantes, aumentando la sensibilidad tumoral al fármaco."
                },
                {
                  "id": 430,
                  "question": "Comparando la inactivación de un gen supresor de tumor por mutación genética clásica con su inactivación por hipermetilación del promotor (epimutación), ¿qué predice esto sobre la reversibilidad potencial del silenciamiento?",
                  "options": [
                    "Ambas son igualmente irreversibles",
                    "La epimutación es potencialmente reversible (p. ej. con agentes desmetilantes); la mutación genética es permanente",
                    "La mutación genética es reversible y la epimutación no",
                    "Ninguna de las dos altera la expresión génica de forma significativa"
                  ],
                  "correct": 1,
                  "explanation": "Las alteraciones epigenéticas como la metilación no cambian la secuencia de ADN y en teoría pueden revertirse farmacológicamente, a diferencia de una mutación estructural permanente."
                },
                {
                  "id": 431,
                  "question": "Si un tumor de mama presenta amplificación de HER2 pero no muestra mutaciones puntuales en oncogenes clásicos como KRAS o TP53, ¿qué se puede inferir sobre el mecanismo oncogénico dominante en ese tumor?",
                  "options": [
                    "Que el tumor no tiene ningún mecanismo molecular identificable",
                    "Que el mecanismo dominante es la amplificación/sobreexpresión génica, no necesariamente una mutación puntual",
                    "Que el tumor es benigno, ya que no hay mutaciones puntuales",
                    "Que HER2 no puede considerarse un protooncogén en este caso"
                  ],
                  "correct": 1,
                  "explanation": "La oncogénesis puede producirse por distintas vías; en este caso la sobreexpresión de HER2 por amplificación génica es el mecanismo relevante, independientemente de la ausencia de mutaciones puntuales en otros genes."
                },
                {
                  "id": 432,
                  "question": "Comparando el gen de fusión BCR-ABL con una simple sobreexpresión por amplificación génica, ¿qué diferencia funcional predice sobre la proteína resultante?",
                  "options": [
                    "Ambos mecanismos producen exactamente la misma proteína, solo cambia la cantidad",
                    "BCR-ABL genera una proteína nueva con actividad enzimática anómala y constitutiva; la amplificación solo incrementa la cantidad de la proteína normal",
                    "La amplificación genera una proteína nueva y BCR-ABL solo aumenta la cantidad de la proteína normal",
                    "Ninguno de los dos mecanismos altera la función de la proteína"
                  ],
                  "correct": 1,
                  "explanation": "La translocación que forma BCR-ABL crea una proteína de fusión con actividad tirosina cinasa desregulada, cualitativamente distinta a la proteína normal amplificada."
                },
                {
                  "id": 433,
                  "question": "Si dos pacientes presentan tumores con pérdida de función de p53 —uno por mutación puntual y otro por deleción completa del gen—, ¿qué predice esto sobre su consecuencia funcional común?",
                  "options": [
                    "No comparten ninguna consecuencia funcional",
                    "Ambos pierden la capacidad de detener el ciclo celular e inducir apoptosis ante daño al ADN, independientemente del mecanismo exacto de inactivación",
                    "Solo el paciente con deleción pierde función de p53",
                    "Solo el paciente con mutación puntual pierde función de p53"
                  ],
                  "correct": 1,
                  "explanation": "Lo relevante funcionalmente es la pérdida de la actividad de p53 como guardián del genoma, sin importar si se debe a una mutación puntual o a una deleción completa."
                },
                {
                  "id": 434,
                  "question": "Comparando un virus de ADN oncogénico (como el VPH) con un retrovirus oncogénico, ¿qué diferencia se predice en su mecanismo de transformación celular?",
                  "options": [
                    "Ambos actúan exactamente de la misma manera, insertando su genoma cerca de protooncogenes",
                    "El VPH inactiva proteínas supresoras (p53, Rb) mediante proteínas virales (E6, E7); el retrovirus inserta su material genético cerca de protooncogenes y los sobreexpresa vía su promotor viral",
                    "El retrovirus inactiva p53 directamente y el VPH sobreexpresa protooncogenes",
                    "Ninguno de los dos virus tiene relación con la carcinogénesis"
                  ],
                  "correct": 1,
                  "explanation": "El VPH codifica oncoproteínas (E6/E7) que inactivan supresores de tumor; los retrovirus insertan su provirus cerca de protooncogenes, sobreexpresándolos mediante su promotor viral fuerte."
                },
                {
                  "id": 435,
                  "question": "Comparando la pérdida de heterocigosidad (LOH) en un paciente con predisposición hereditaria frente a uno sin antecedentes familiares, ¿qué se predice sobre la velocidad de aparición del segundo evento necesario para inactivar el gen supresor?",
                  "options": [
                    "Es igual en ambos casos, ya que se requieren siempre dos eventos somáticos independientes",
                    "En el paciente hereditario solo se necesita un evento somático adicional (ya nace con un alelo mutado), por lo que la inactivación completa ocurre más rápido",
                    "En el paciente sin antecedentes la inactivación ocurre más rápido",
                    "Ninguno de los dos puede desarrollar pérdida de heterocigosidad"
                  ],
                  "correct": 1,
                  "explanation": "En la forma hereditaria basta un segundo evento somático para inactivar el gen (ya hay una copia mutada de origen germinal); en la forma esporádica se requieren dos eventos independientes, lo que retrasa la aparición."
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 436,
                  "question": "Un paciente con cáncer colorrectal metastásico es tratado con cetuximab (anticuerpo anti-EGFR), pero no responde. El estudio molecular revela una mutación activadora en KRAS. ¿Cómo se explica esta resistencia primaria al tratamiento?",
                  "options": [
                    "El cetuximab no tiene relación con la vía de EGFR",
                    "KRAS actúa río abajo de EGFR en la misma vía de señalización; si está mutado y constitutivamente activo, bloquear el receptor (río arriba) no detiene la proliferación celular",
                    "La mutación en KRAS inactiva por completo al tumor, por lo que no debería requerir tratamiento",
                    "El cetuximab solo funciona en tumores con KRAS mutado"
                  ],
                  "correct": 1,
                  "explanation": "Cuando KRAS está mutado, la vía de señalización permanece activa independientemente del estado del receptor EGFR, por lo que bloquear EGFR con cetuximab resulta ineficaz."
                },
                {
                  "id": 437,
                  "question": "Una familia con múltiples casos de retinoblastoma bilateral en varias generaciones consulta genética. ¿Qué información es correcta transmitirles sobre el riesgo de sus futuros hijos, integrando el concepto de mutación germinal?",
                  "options": [
                    "No existe ningún riesgo hereditario, el retinoblastoma siempre es esporádico",
                    "Si el patrón hereditario porta la mutación germinal del gen RB en todas sus células, cada hijo tiene aproximadamente 50% de probabilidad de heredar el alelo mutado, y de heredarlo, alta probabilidad de desarrollar la enfermedad",
                    "Todos los hijos desarrollarán la enfermedad con certeza absoluta",
                    "El riesgo solo existe si ambos padres portan la mutación"
                  ],
                  "correct": 1,
                  "explanation": "En la forma hereditaria del retinoblastoma, el alelo mutado se transmite de forma autosómica dominante con alta penetrancia, ya que solo se requiere un segundo evento somático para el desarrollo tumoral."
                },
                {
                  "id": 438,
                  "question": "Un paciente con leucemia mieloide crónica (cromosoma Filadelfia positivo) responde inicialmente bien a imatinib, pero años después deja de responder. El estudio molecular muestra una nueva mutación en el dominio de unión de BCR-ABL. ¿Qué fenómeno explica esta pérdida de respuesta?",
                  "options": [
                    "El imatinib dejó de absorberse por el paciente",
                    "Selección clonal de una subclona con mutación de resistencia en el dominio cinasa de BCR-ABL, favorecida por la presión selectiva del tratamiento continuo",
                    "El cromosoma Filadelfia desapareció espontáneamente",
                    "La leucemia se curó completamente y los síntomas son de otra enfermedad"
                  ],
                  "correct": 1,
                  "explanation": "El tratamiento prolongado ejerce presión selectiva que favorece la supervivencia de subclonas con mutaciones que impiden la unión eficaz del fármaco a BCR-ABL."
                },
                {
                  "id": 439,
                  "question": "Un paciente con antecedente de exposición ocupacional prolongada a benceno desarrolla una leucemia cuyo cariotipo muestra múltiples translocaciones y deleciones, sin una mutación única identificable como causante. ¿Cómo se interpreta este hallazgo?",
                  "options": [
                    "El benceno no tiene relación con el desarrollo de leucemia",
                    "El benceno actuó como carcinógeno induciendo daño genético acumulativo e inestabilidad cromosómica global, consistente con el modelo de acumulación progresiva de fallas genéticas más que con una mutación única",
                    "Es un error de laboratorio, todo cáncer debe tener una única mutación causante",
                    "Significa que el paciente no tiene cáncer, solo una alteración benigna"
                  ],
                  "correct": 1,
                  "explanation": "Como en el caso del trabajador metalúrgico visto en el módulo, la exposición crónica a carcinógenos puede producir múltiples alteraciones cromosómicas acumulativas en vez de una mutación única identificable."
                },
                {
                  "id": 440,
                  "question": "Un paciente con síndrome de Li-Fraumeni (mutación germinal en TP53) es diagnosticado con un sarcoma a los 25 años. Su oncólogo evita la radioterapia cuando existen alternativas terapéuticas razonables. ¿Por qué esta decisión es coherente con el defecto molecular subyacente?",
                  "options": [
                    "Porque la radioterapia nunca es efectiva contra sarcomas",
                    "Porque al tener comprometida la función de p53, sus células tienen menor capacidad de responder adecuadamente al daño del ADN inducido por la radiación, lo que podría favorecer neoplasias secundarias inducidas por el propio tratamiento",
                    "Porque el síndrome de Li-Fraumeni no afecta la respuesta a la radiación",
                    "Porque la radioterapia cura completamente cualquier tumor con mutación de TP53"
                  ],
                  "correct": 1,
                  "explanation": "La pérdida de función de p53 (guardián del genoma) compromete la respuesta al daño del ADN, por lo que la radiación —que induce daño genético— puede favorecer la aparición de neoplasias secundarias en estos pacientes."
                },
                {
                  "id": 441,
                  "question": "En el estudio molecular de un tumor gástrico se encuentra hipermetilación del promotor de un gen supresor de tumor, sin mutaciones en su secuencia de ADN. ¿Qué estrategia terapéutica en investigación podría considerarse, basada en este mecanismo epigenético?",
                  "options": [
                    "Ninguna, los cambios epigenéticos no pueden abordarse farmacológicamente",
                    "El uso de agentes desmetilantes que podrían reactivar la expresión del gen supresor silenciado",
                    "Radioterapia exclusivamente, ya que actúa directamente sobre la metilación del ADN",
                    "Cirugía inmediata, ya que la epimutación no responde a ningún tratamiento sistémico"
                  ],
                  "correct": 1,
                  "explanation": "A diferencia de una mutación estructural, el silenciamiento por metilación del promotor es potencialmente reversible con fármacos desmetilantes, una estrategia en investigación activa."
                },
                {
                  "id": 442,
                  "question": "Un paciente con infección persistente por VPH de alto riesgo desarrolla, años después, un cáncer de cuello uterino invasor. ¿Qué mecanismo molecular específico del virus explica esta progresión con el tiempo?",
                  "options": [
                    "El VPH destruye directamente el ADN celular sin mecanismo específico",
                    "La proteína E6 del VPH inactiva a p53 y la proteína E7 inactiva a Rb, eliminando dos mecanismos clave de control del ciclo celular y favoreciendo la acumulación progresiva de mutaciones adicionales",
                    "El VPH solo causa cáncer si se asocia a tabaquismo, sin mecanismo molecular propio",
                    "El VPH actúa exclusivamente como agente alquilante del ADN"
                  ],
                  "correct": 1,
                  "explanation": "Las oncoproteínas virales E6 y E7 inactivan a p53 y Rb respectivamente, eliminando los principales puntos de control del ciclo celular y facilitando la acumulación de alteraciones genéticas adicionales."
                },
                {
                  "id": 443,
                  "question": "Un paciente con cáncer de colon hereditario (síndrome de Lynch) tiene una mutación en genes de reparación de errores de emparejamiento (MMR, como MSH2/MLH1). ¿Qué consecuencia molecular general se espera en sus tumores?",
                  "options": [
                    "Ausencia total de mutaciones adicionales en el tumor",
                    "Alta inestabilidad de microsatélites y acumulación acelerada de mutaciones adicionales, ya que el sistema de reparación de errores del ADN está comprometido",
                    "Mayor estabilidad genómica que en tumores esporádicos",
                    "Ninguna relación con la velocidad de acumulación de mutaciones"
                  ],
                  "correct": 1,
                  "explanation": "Al estar comprometido el sistema de reparación de errores de emparejamiento, los tumores del síndrome de Lynch acumulan mutaciones mucho más rápido, generando inestabilidad de microsatélites característica."
                },
                {
                  "id": 444,
                  "question": "Un tumor de mama muestra amplificación del gen HER2 confirmada por estudio molecular. ¿Qué opción terapéutica dirigida sería razonable considerar, integrando este mecanismo molecular específico?",
                  "options": [
                    "Un inhibidor de BCR-ABL como el imatinib",
                    "Trastuzumab, un anticuerpo monoclonal dirigido específicamente contra el receptor HER2",
                    "Radioterapia exclusiva, sin ninguna terapia dirigida",
                    "Un agonista de GnRH, ya que HER2 es un receptor hormonal"
                  ],
                  "correct": 1,
                  "explanation": "Dado que el mecanismo oncogénico dominante en este caso es la sobreexpresión/amplificación de HER2, el trastuzumab (dirigido específicamente contra este receptor) es la opción terapéutica racional."
                },
                {
                  "id": 445,
                  "question": "En un paciente con adenocarcinoma colorrectal se identifican mutaciones conductoras en APC y KRAS presentes en todas las regiones tumorales analizadas, junto con más de 300 mutaciones adicionales presentes solo en algunas regiones. ¿Cómo se interpreta clínicamente este hallazgo respecto a la heterogeneidad tumoral?",
                  "options": [
                    "Todas las mutaciones tienen el mismo valor pronóstico y terapéutico",
                    "Las mutaciones conductoras (APC, KRAS) representan alteraciones fundadoras compartidas por todo el tumor, mientras que las mutaciones subclonales reflejan heterogeneidad intratumoral que podría explicar respuestas variables a terapias dirigidas",
                    "La presencia de mutaciones pasajeras descarta el diagnóstico de cáncer",
                    "Ninguna de las mutaciones tiene relevancia clínica"
                  ],
                  "correct": 1,
                  "explanation": "La heterogeneidad intratumoral (mutaciones presentes solo en algunas subclonas) es clínicamente relevante porque puede explicar por qué algunas células tumorales escapan a una terapia dirigida a una alteración específica."
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
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 446,
                  "question": "Comparando un antibiograma por difusión en disco (Kirby-Bauer) con un método de determinación de la CMI (dilución en caldo), ¿qué información adicional proporciona el segundo que el primero no ofrece directamente?",
                  "options": [
                    "El halo de inhibición en milímetros",
                    "El valor numérico exacto de la concentración mínima inhibitoria, mientras que Kirby-Bauer solo ofrece una categoría cualitativa (S/I/R)",
                    "La especie bacteriana exacta del aislamiento",
                    "Ninguna diferencia relevante entre ambos métodos"
                  ],
                  "correct": 1,
                  "explanation": "La CMI aporta un dato cuantitativo (concentración exacta), útil para ajustar dosis o comparar entre fármacos, mientras que Kirby-Bauer solo clasifica en categorías."
                },
                {
                  "id": 447,
                  "question": "Si dos antibióticos distintos producen el mismo halo de inhibición en milímetros frente a la misma bacteria, ¿se puede concluir que ambos son igual de efectivos?",
                  "options": [
                    "Sí, un halo igual siempre implica efectividad idéntica",
                    "No, porque los puntos de corte (breakpoints) son específicos para cada fármaco; el mismo halo puede significar \"sensible\" para uno y \"resistente\" para otro",
                    "Sí, porque el tamaño del halo es una medida absoluta y universal",
                    "No se puede determinar sin conocer el peso molecular del paciente"
                  ],
                  "correct": 1,
                  "explanation": "Cada antibiótico tiene su propia tabla de puntos de corte estandarizados (CLSI/EUCAST); el mismo halo puede interpretarse de forma distinta según el fármaco."
                },
                {
                  "id": 448,
                  "question": "Comparando la interpretación de un antibiótico reportado como \"sensible\" en sangre frente al mismo fármaco en orina, cuando este tiene baja penetración tisular sistémica, ¿qué se predice sobre su utilidad clínica en cada sitio?",
                  "options": [
                    "Es igual de útil en ambos sitios sin ninguna diferencia",
                    "Puede ser útil en orina, donde se concentra (como la nitrofurantoína), pero inútil en sangre/tejidos si no alcanza concentraciones terapéuticas sistémicas",
                    "Nunca es útil en orina si no lo es en sangre",
                    "La interpretación no depende del sitio de infección"
                  ],
                  "correct": 1,
                  "explanation": "La utilidad clínica depende de la farmacocinética del fármaco en cada sitio; algunos antibióticos se concentran selectivamente en la orina sin alcanzar niveles útiles en sangre."
                },
                {
                  "id": 449,
                  "question": "Un antibiograma reporta E. coli sensible a ciprofloxacina y a nitrofurantoína para una cistitis no complicada. ¿Qué criterio, más allá de la sensibilidad reportada, debe aplicarse para elegir el fármaco de primera línea?",
                  "options": [
                    "Elegir siempre el de mayor halo de inhibición",
                    "El principio de menor espectro y preservación de fluoroquinolonas: preferir nitrofurantoína para no generar presión selectiva innecesaria sobre las fluoroquinolonas",
                    "Elegir el más costoso, asumiendo mayor eficacia",
                    "Elegir cualquiera de los dos de forma indistinta"
                  ],
                  "correct": 1,
                  "explanation": "Ante igual sensibilidad, se prefiere el antibiótico de espectro más reducido y mejor perfil para la indicación específica, reservando las fluoroquinolonas para casos que las requieran."
                },
                {
                  "id": 450,
                  "question": "Comparando un sistema automatizado (ej. VITEK 2) con el método manual de Kirby-Bauer, ¿qué limitación clínica comparten ambos frente a mecanismos de resistencia inducibles o de baja expresión?",
                  "options": [
                    "Ninguno de los dos tiene esta limitación",
                    "Ambos pueden no detectar resistencia inducible o de baja expresión sin pruebas confirmatorias adicionales",
                    "Solo el método automatizado tiene esta limitación",
                    "Solo el método manual tiene esta limitación"
                  ],
                  "correct": 1,
                  "explanation": "Tanto los sistemas automatizados como los manuales pueden requerir pruebas suplementarias (ej. disco de cefoxitina) para detectar resistencias inducibles o heterogéneas."
                },
                {
                  "id": 451,
                  "question": "Si el resultado de un antibiótico se interpreta como \"Intermedio (I)\" en lugar de \"Sensible (S)\", ¿qué implica esto para la decisión terapéutica?",
                  "options": [
                    "Es equivalente a \"Resistente\" y debe descartarse por completo",
                    "Puede requerir dosis más altas, mayor frecuencia de administración, o considerarse solo si el fármaco se concentra bien en el sitio de infección",
                    "Es equivalente a \"Sensible\" sin ninguna consideración adicional",
                    "Significa que el laboratorio cometió un error y debe repetirse la prueba"
                  ],
                  "correct": 1,
                  "explanation": "La categoría \"Intermedio\" sugiere que el fármaco podría funcionar en ciertas condiciones (dosis altas, sitios de concentración farmacológica), pero con menor margen de seguridad que \"Sensible\"."
                },
                {
                  "id": 452,
                  "question": "Comparando un aislamiento de Klebsiella pneumoniae productor de BLEE con otro productor de carbapenemasa, ¿qué opciones terapéuticas quedan disponibles frente a cada uno?",
                  "options": [
                    "Ambos dejan las mismas opciones terapéuticas disponibles",
                    "Frente a BLEE, los carbapenémicos siguen siendo eficaces; frente a carbapenemasa, se pierde también la eficacia de los carbapenémicos, dejando opciones muy limitadas",
                    "Frente a carbapenemasa, cualquier betalactámico sigue funcionando normalmente",
                    "El productor de BLEE no requiere ningún tratamiento antibiótico"
                  ],
                  "correct": 1,
                  "explanation": "Las BLEE respetan a los carbapenémicos, que siguen siendo de elección; las carbapenemasas hidrolizan también a estos, dejando opciones terapéuticas muy reducidas."
                },
                {
                  "id": 453,
                  "question": "Comparando el uso empírico de un antibiótico de amplio espectro con el uso de uno de espectro reducido dirigido tras el antibiograma, ¿qué efecto se predice sobre la presión de selección de resistencia a nivel poblacional?",
                  "options": [
                    "No hay diferencia en la presión de selección entre ambos enfoques",
                    "El de amplio espectro genera mayor presión selectiva sobre la flora comensal y mayor riesgo de selección de multirresistencia; el dirigido minimiza este efecto",
                    "El dirigido genera mayor presión de selección que el de amplio espectro",
                    "Solo el uso ambulatorio genera presión de selección, no el hospitalario"
                  ],
                  "correct": 1,
                  "explanation": "El desescalamiento a un antibiótico de espectro reducido tras el antibiograma reduce el impacto sobre la microbiota y la presión selectiva sobre bacterias resistentes."
                },
                {
                  "id": 454,
                  "question": "Un antibiograma reporta un halo relativamente grande para ampicilina en un aislamiento de Enterococcus, pero la categoría final es \"Resistente\". ¿Qué explica esta aparente contradicción?",
                  "options": [
                    "Es un error de laboratorio, un halo grande siempre implica sensibilidad",
                    "El tamaño absoluto del halo no determina la categoría; cada fármaco tiene su propia escala de puntos de corte, por lo que un halo \"grande\" puede seguir siendo resistente si el punto de corte de ese fármaco es más exigente",
                    "Enterococcus nunca puede ser resistente a ampicilina",
                    "El halo grande siempre indica un error técnico en la prueba"
                  ],
                  "correct": 1,
                  "explanation": "La interpretación depende de los puntos de corte estandarizados específicos para cada combinación fármaco-microorganismo, no del tamaño absoluto del halo."
                },
                {
                  "id": 455,
                  "question": "Comparando el uso de un antibiótico bactericida frente a uno bacteriostático en un paciente neutropénico grave, ¿por qué se prefiere típicamente el bactericida en este contexto?",
                  "options": [
                    "Porque los bacteriostáticos son siempre más tóxicos",
                    "Porque el paciente neutropénico no cuenta con un sistema inmune funcional para completar la eliminación de las bacterias solo inhibidas por el bacteriostático, por lo que se necesita un fármaco que las destruya directamente",
                    "Porque los bactericidas nunca generan resistencia",
                    "No hay ninguna razón clínica para preferir uno sobre otro en este contexto"
                  ],
                  "correct": 1,
                  "explanation": "En pacientes inmunocomprometidos que no pueden apoyarse en su sistema inmune para eliminar bacterias inhibidas, se prefieren los antibióticos bactericidas, que destruyen directamente al patógeno."
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 456,
                  "question": "Paciente femenina de 24 años con cistitis no complicada. El antibiograma reporta Ciprofloxacina (30 mm, S) y Nitrofurantoína (20 mm, S). El médico prescribe ciprofloxacina \"porque tiene el halo más grande\". ¿Qué error se cometió y cuál sería la conducta correcta?",
                  "options": [
                    "Ningún error, el halo más grande siempre es la mejor opción",
                    "Se eligió por tamaño de halo en vez de por criterio de menor espectro; debió preferirse nitrofurantoína, de primera línea para cistitis no complicada, preservando las fluoroquinolonas",
                    "El error fue no haber usado ambos antibióticos combinados",
                    "El error fue no repetir el antibiograma antes de prescribir"
                  ],
                  "correct": 1,
                  "explanation": "Ante igual sensibilidad, el criterio correcto es el de menor espectro, no el tamaño del halo; la nitrofurantoína es de elección en cistitis no complicada."
                },
                {
                  "id": 457,
                  "question": "Un paciente hospitalizado con neumonía nosocomial tiene un aislado de Pseudomonas aeruginosa resistente a betalactámicos, aminoglucósidos y fluoroquinolonas, pero sensible a colistina. ¿Cómo se clasifica epidemiológicamente este aislado y qué implica para el manejo?",
                  "options": [
                    "Se clasifica como sensible estándar y se maneja con cualquier betalactámico",
                    "Se clasifica como multirresistente (MDR) o incluso de resistencia extendida (XDR); implica manejo con antibióticos de \"última línea\" (colistina) y medidas estrictas de control de infecciones",
                    "Se clasifica como panresistente (PDR) y no existe ningún tratamiento posible",
                    "No requiere ninguna medida de aislamiento adicional"
                  ],
                  "correct": 1,
                  "explanation": "Al ser resistente a múltiples categorías de antibióticos pero conservar sensibilidad a colistina, se clasifica como MDR/XDR, requiriendo terapia de reserva y control estricto de infecciones."
                },
                {
                  "id": 458,
                  "question": "En un paciente con meningitis bacteriana, el antibiograma reporta un antibiótico como \"Sensible\" in vitro, pero el clínico decide no utilizarlo. ¿Qué otra variable, más allá de la sensibilidad, pudo motivar esta decisión?",
                  "options": [
                    "El costo del medicamento exclusivamente",
                    "La penetración del fármaco a través de la barrera hematoencefálica; un fármaco \"sensible\" in vitro puede no alcanzar concentraciones terapéuticas en el LCR",
                    "El color de la presentación del medicamento",
                    "El antibiograma nunca puede ser cuestionado por el clínico"
                  ],
                  "correct": 1,
                  "explanation": "La sensibilidad in vitro no garantiza eficacia clínica si el fármaco no penetra adecuadamente al sitio de infección, como ocurre con la barrera hematoencefálica."
                },
                {
                  "id": 459,
                  "question": "Un paciente con alergia documentada a penicilinas tiene un antibiograma que reporta a la penicilina como la opción \"Sensible\" más barata y de espectro reducido. ¿Por qué no debe usarse a pesar del resultado favorable?",
                  "options": [
                    "Porque el antibiograma nunca debe considerarse confiable",
                    "Porque el antibiograma no contempla la seguridad individual del paciente; una alergia documentada contraindica su uso independientemente del resultado de sensibilidad",
                    "Porque la penicilina nunca es efectiva contra ninguna bacteria",
                    "Porque el precio bajo siempre indica menor calidad del fármaco"
                  ],
                  "correct": 1,
                  "explanation": "El reporte de laboratorio orienta pero no reemplaza la evaluación clínica de seguridad del paciente, incluyendo antecedentes de alergias."
                },
                {
                  "id": 460,
                  "question": "En una UCI se detecta un brote de Klebsiella pneumoniae productora de BLEE en varios pacientes. Más allá del tratamiento antibiótico individual, ¿qué medida es prioritaria para contener la diseminación?",
                  "options": [
                    "Aumentar la dosis de antibióticos en todos los pacientes de la UCI",
                    "Precauciones de contacto (aislamiento, higiene de manos, uso de bata/guantes) y programas de optimización de antimicrobianos (PROA)",
                    "Suspender todos los antibióticos en la unidad de forma preventiva",
                    "Trasladar a todos los pacientes a otro hospital"
                  ],
                  "correct": 1,
                  "explanation": "El control de brotes nosocomiales por bacterias multirresistentes requiere medidas de aislamiento de contacto y estrategias institucionales de uso racional de antimicrobianos."
                },
                {
                  "id": 461,
                  "question": "Una paciente embarazada con infección de vías urinarias tiene un antibiograma que reporta a las fluoroquinolonas como la opción más sensible. ¿Por qué el clínico debe descartar esta opción a pesar del resultado de laboratorio?",
                  "options": [
                    "Porque las fluoroquinolonas nunca son efectivas contra bacterias urinarias",
                    "Porque las fluoroquinolonas están contraindicadas en el embarazo por su potencial toxicidad sobre el desarrollo del cartílago fetal, independientemente de la sensibilidad reportada",
                    "Porque el embarazo hace que todos los antibióticos sean inútiles",
                    "No hay ninguna razón para descartarlas, deben usarse siempre que sean sensibles"
                  ],
                  "correct": 1,
                  "explanation": "La seguridad del fármaco en poblaciones especiales (embarazo) debe integrarse a la decisión terapéutica, más allá del resultado de sensibilidad in vitro."
                },
                {
                  "id": 462,
                  "question": "Un paciente con función renal disminuida recibe un aminoglucósido reportado como \"Sensible\". ¿Qué ajuste es imprescindible antes de administrarlo?",
                  "options": [
                    "Ninguno, el antibiograma ya garantiza una dosis segura",
                    "Ajustar la dosis y/o el intervalo de administración según la función renal, dado que los aminoglucósidos se eliminan por vía renal y tienen estrecho margen terapéutico",
                    "Duplicar la dosis estándar para compensar la falla renal",
                    "Cambiar la vía de administración a oral exclusivamente"
                  ],
                  "correct": 1,
                  "explanation": "Los aminoglucósidos requieren ajuste de dosis en insuficiencia renal por su eliminación renal y su estrecho margen entre eficacia y toxicidad (nefro/ototoxicidad)."
                },
                {
                  "id": 463,
                  "question": "Un paciente con endocarditis por Enterococcus resistente a vancomicina (VRE) es diagnosticado. ¿Qué implica este hallazgo para las opciones terapéuticas y la conducta clínica?",
                  "options": [
                    "Implica que no existe ningún tratamiento disponible",
                    "Implica recurrir a antibióticos de reserva (linezolid, daptomicina) y reforzar medidas de aislamiento de contacto por el riesgo de transmisión de VRE",
                    "Implica que puede tratarse con cualquier betalactámico estándar",
                    "Implica suspender toda medida de aislamiento, ya que VRE no se transmite entre pacientes"
                  ],
                  "correct": 1,
                  "explanation": "La resistencia a vancomicina en Enterococcus obliga a usar antibióticos de reserva y a reforzar las precauciones de contacto, dado el riesgo de diseminación nosocomial de VRE."
                },
                {
                  "id": 464,
                  "question": "Un paciente con infección de piel y tejidos blandos por MRSA comunitario recibe tratamiento empírico con cefalexina mientras se espera el antibiograma. ¿Por qué esta elección empírica es probablemente inadecuada?",
                  "options": [
                    "Porque la cefalexina no existe como antibiótico real",
                    "Porque MRSA expresa PBP2a con baja afinidad por todos los betalactámicos estándar, incluidas las cefalosporinas, por lo que la cefalexina no sería efectiva",
                    "Porque la cefalexina solo se usa en infecciones urinarias",
                    "Porque MRSA es sensible a todos los betalactámicos sin excepción"
                  ],
                  "correct": 1,
                  "explanation": "El mecanismo de resistencia de MRSA (PBP2a) afecta a todos los betalactámicos estándar, por lo que se requieren alternativas activas frente a MRSA (clindamicina, TMP-SMX, vancomicina según gravedad)."
                },
                {
                  "id": 465,
                  "question": "Un residente interpreta un antibiograma comparando únicamente el tamaño visual de los halos, eligiendo el de mayor diámetro sin revisar la tabla de puntos de corte. Su tutor lo corrige. ¿Cuál es el mensaje clave que debe transmitirle?",
                  "options": [
                    "Que siempre debe elegirse el antibiótico más caro disponible",
                    "Que \"el antibiograma orienta, no ordena\": la interpretación debe basarse en los puntos de corte estandarizados de cada fármaco y en el contexto clínico del paciente, no en el tamaño absoluto del halo",
                    "Que el tamaño del halo es el único criterio válido para elegir un antibiótico",
                    "Que los antibiogramas ya no son necesarios si se conoce la especie bacteriana"
                  ],
                  "correct": 1,
                  "explanation": "La interpretación correcta del antibiograma exige comparar contra los puntos de corte específicos de cada fármaco e integrar la condición clínica del paciente, nunca guiarse solo por el tamaño del halo."
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
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 466,
                  "question": "Comparando la resistencia intrínseca con la adquirida, ¿qué se predice sobre el resultado de antibiogramas repetidos en el tiempo para una misma especie bacteriana?",
                  "options": [
                    "En ambos casos el resultado variará constantemente",
                    "En la intrínseca el resultado será constante en el tiempo (propiedad fija de la especie); en la adquirida el patrón puede cambiar entre aislamientos en distintos momentos",
                    "En la adquirida el resultado siempre será constante y en la intrínseca variable",
                    "Ninguna de las dos puede evaluarse mediante antibiogramas"
                  ],
                  "correct": 1,
                  "explanation": "La resistencia intrínseca es una característica estable de la especie; la adquirida puede aparecer, desaparecer o modificarse según la presión selectiva ejercida en cada momento."
                },
                {
                  "id": 467,
                  "question": "Si una bacteria desarrolla simultáneamente una bomba de eflujo activa y una disminución de porinas, ¿qué efecto combinado se predice sobre la concentración intracelular del antibiótico?",
                  "options": [
                    "Ningún efecto adicional respecto a tener solo uno de los mecanismos",
                    "Efecto sinérgico: menor entrada del fármaco (porinas) más mayor salida activa (eflujo) resulta en una concentración intracelular mucho menor que con cualquiera de los mecanismos por separado",
                    "El efecto se anula mutuamente, dejando la concentración intracelular sin cambios",
                    "Solo se reduce la concentración extracelular, no la intracelular"
                  ],
                  "correct": 1,
                  "explanation": "La combinación de menor entrada y mayor salida del fármaco produce un efecto sinérgico que reduce drásticamente la concentración intracelular efectiva del antibiótico."
                },
                {
                  "id": 468,
                  "question": "Comparando la transferencia de resistencia por conjugación con la transformación, ¿qué diferencia se predice en cuanto a la necesidad de contacto físico entre bacterias?",
                  "options": [
                    "Ambas requieren contacto físico directo",
                    "La conjugación requiere contacto físico directo (pili sexual) para transferir plásmidos; la transformación no requiere contacto, ya que la bacteria capta ADN libre del medio",
                    "La transformación requiere contacto físico y la conjugación no",
                    "Ninguna de las dos requiere ADN extracromosómico"
                  ],
                  "correct": 1,
                  "explanation": "La conjugación es un mecanismo de transferencia directa mediada por contacto físico; la transformación implica la captación de ADN libre presente en el ambiente, sin contacto celular."
                },
                {
                  "id": 469,
                  "question": "Si un plásmido de resistencia se transfiere por conjugación entre especies bacterianas distintas (por ejemplo, de E. coli a Klebsiella), ¿qué predice esto sobre la velocidad de diseminación de la resistencia en un ambiente hospitalario?",
                  "options": [
                    "Predice que la resistencia quedará limitada exclusivamente a E. coli",
                    "Predice una diseminación potencialmente rápida e interespecie, ya que el material genético móvil no está limitado a una sola especie bacteriana",
                    "Predice que la resistencia nunca podrá diseminarse fuera del paciente índice",
                    "No tiene ningún impacto epidemiológico relevante"
                  ],
                  "correct": 1,
                  "explanation": "Los plásmidos conjugativos pueden transferirse entre especies distintas, facilitando una diseminación rápida y amplia de genes de resistencia en el entorno hospitalario."
                },
                {
                  "id": 470,
                  "question": "Comparando una betalactamasa de espectro extendido (BLEE) con una carbapenemasa en términos de espectro de sustrato, ¿qué opciones terapéuticas quedan disponibles frente a cada una?",
                  "options": [
                    "Ambas dejan exactamente las mismas opciones terapéuticas",
                    "Frente a BLEE, los carbapenémicos siguen siendo eficaces; frente a carbapenemasas, se pierden incluso los carbapenémicos, dejando opciones muy limitadas",
                    "Frente a carbapenemasa, cualquier penicilina sigue siendo eficaz",
                    "La BLEE no afecta a ningún betalactámico"
                  ],
                  "correct": 1,
                  "explanation": "Las BLEE respetan a los carbapenémicos; las carbapenemasas los inactivan también, reduciendo drásticamente las opciones terapéuticas disponibles."
                },
                {
                  "id": 471,
                  "question": "Comparando el enfoque \"Una Salud\" (One Health) con un enfoque exclusivamente clínico-hospitalario para abordar la resistencia antimicrobiana, ¿qué diferencia se predice en el alcance de las intervenciones?",
                  "options": [
                    "Ambos enfoques tienen exactamente el mismo alcance",
                    "\"Una Salud\" integra la salud humana, animal y ambiental (incluyendo el uso en agricultura/ganadería); el enfoque clínico-hospitalario se limita al uso terapéutico en pacientes",
                    "El enfoque clínico-hospitalario abarca más fuentes de resistencia que \"Una Salud\"",
                    "Ninguno de los dos enfoques considera el uso de antibióticos en animales"
                  ],
                  "correct": 1,
                  "explanation": "El enfoque \"Una Salud\" reconoce que la resistencia surge y se disemina a través de múltiples sectores interconectados, no solo en el ámbito clínico humano."
                },
                {
                  "id": 472,
                  "question": "Comparando la modificación del sitio blanco en MRSA (PBP2a) con la de VRE (D-Ala-D-Lactato), ¿qué tienen en común ambos mecanismos en términos de estrategia bioquímica?",
                  "options": [
                    "Ambos degradan enzimáticamente el antibiótico",
                    "Ambos alteran estructuralmente el sitio de unión del antibiótico para reducir su afinidad, en lugar de destruir o expulsar el fármaco",
                    "Ambos expulsan activamente el fármaco mediante bombas de eflujo",
                    "Ninguno de los dos afecta la afinidad del fármaco por su blanco"
                  ],
                  "correct": 1,
                  "explanation": "Tanto PBP2a en MRSA como el precursor modificado en VRE representan alteraciones estructurales del sitio blanco que reducen la afinidad de unión del antibiótico, sin destruirlo ni expulsarlo."
                },
                {
                  "id": 473,
                  "question": "Si una bacteria adquiere un gen de resistencia mediante un bacteriófago (transducción), ¿qué predice esto sobre la posibilidad de que la resistencia se disemine entre especies muy distintas?",
                  "options": [
                    "Se disemina siempre con la misma facilidad que por conjugación",
                    "La transducción suele estar limitada por la especificidad del bacteriófago por su hospedador, por lo que la diseminación interespecie suele ser más restringida que con plásmidos conjugativos",
                    "La transducción es el mecanismo más eficiente para diseminar resistencia entre especies distintas",
                    "La transducción no puede transferir genes de resistencia bajo ninguna circunstancia"
                  ],
                  "correct": 1,
                  "explanation": "Los bacteriófagos suelen tener un rango de hospedador limitado, lo que restringe la diseminación interespecie de la resistencia adquirida por transducción, en comparación con los plásmidos conjugativos."
                },
                {
                  "id": 474,
                  "question": "Comparando el uso profiláctico de antibióticos en ganadería con el uso terapéutico dirigido en humanos, ¿qué efecto diferencial se predice sobre la presión de selección de resistencia?",
                  "options": [
                    "Ambos generan exactamente la misma presión de selección",
                    "El uso profiláctico masivo en ganadería, a menudo subterapéutico y prolongado, genera una presión de selección más amplia y sostenida que favorece la aparición y diseminación de resistencia",
                    "El uso terapéutico dirigido en humanos genera mayor presión de selección que el uso en ganadería",
                    "Ninguno de los dos usos contribuye a la resistencia antimicrobiana"
                  ],
                  "correct": 1,
                  "explanation": "El uso masivo y prolongado de antibióticos en ganadería, frecuentemente a dosis subterapéuticas, constituye una fuente importante y sostenida de presión selectiva sobre poblaciones bacterianas."
                },
                {
                  "id": 475,
                  "question": "Si dos cepas de la misma especie bacteriana muestran distinto perfil de resistencia, una con un plásmido de resistencia y otra sin él, ¿qué se predice sobre la reversibilidad de la resistencia si se elimina la presión antibiótica?",
                  "options": [
                    "La resistencia mediada por plásmido es siempre irreversible",
                    "La resistencia mediada por plásmido puede perderse con el tiempo si no hay presión selectiva, especialmente si conlleva un costo metabólico (fitness cost), mientras que una mutación cromosómica estable persiste con mayor probabilidad",
                    "Ambas formas de resistencia son igualmente estables sin presión selectiva",
                    "La resistencia cromosómica se pierde más fácilmente que la plasmídica"
                  ],
                  "correct": 1,
                  "explanation": "Los plásmidos pueden perderse en ausencia de presión selectiva si representan una carga metabólica para la bacteria, mientras que las mutaciones cromosómicas tienden a ser más estables en el tiempo."
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 476,
                  "question": "Una granja avícola utiliza antibióticos de forma rutinaria como promotores de crecimiento en aves sanas. Meses después, se detectan cepas de E. coli multirresistentes en trabajadores de la granja sin exposición hospitalaria previa. ¿Qué concepto epidemiológico explica esta transmisión?",
                  "options": [
                    "No existe ninguna relación posible entre el uso animal y la resistencia humana",
                    "El enfoque \"Una Salud\": el uso indiscriminado de antibióticos en animales selecciona cepas resistentes que pueden transmitirse a humanos por contacto directo, la cadena alimentaria o el ambiente",
                    "Los trabajadores adquirieron la resistencia por mutación espontánea sin relación con la granja",
                    "Solo el consumo de carne puede transmitir resistencia, nunca el contacto directo"
                  ],
                  "correct": 1,
                  "explanation": "El enfoque \"Una Salud\" reconoce que la resistencia generada en el sector agropecuario puede transmitirse a los humanos a través de múltiples vías de contacto."
                },
                {
                  "id": 477,
                  "question": "Un paciente hospitalizado por tres semanas en UCI desarrolla una infección por Acinetobacter baumannii panresistente (PDR). ¿Qué factores del entorno hospitalario prolongado favorecieron probablemente esta selección?",
                  "options": [
                    "La ausencia total de uso de antibióticos durante la hospitalización",
                    "El uso prolongado y múltiple de antibióticos de amplio espectro, la presión de selección continua propia del ambiente de UCI, y la posible transmisión cruzada nosocomial de cepas ya resistentes",
                    "El uso de un único ciclo corto de antibióticos de espectro reducido",
                    "La ausencia de cualquier procedimiento invasivo durante la estancia"
                  ],
                  "correct": 1,
                  "explanation": "Las estancias prolongadas en UCI, con uso repetido de antibióticos de amplio espectro y riesgo de transmisión cruzada, favorecen la selección de bacterias multi/panresistentes."
                },
                {
                  "id": 478,
                  "question": "Un paciente abandona un tratamiento antibiótico antes de completar los días indicados. Semanas después, la infección recurre con un aislamiento resistente al mismo fármaco. ¿Qué mecanismo de resistencia adquirida se vio favorecido por esta conducta?",
                  "options": [
                    "Ninguno, el abandono del tratamiento no influye en la resistencia",
                    "La exposición a concentraciones subinhibitorias del antibiótico por el tratamiento incompleto ejerce presión selectiva que favorece la supervivencia y selección de subpoblaciones bacterianas con mutaciones de resistencia",
                    "El abandono del tratamiento elimina por completo el riesgo de resistencia",
                    "La resistencia solo puede desarrollarse con tratamientos completos y prolongados"
                  ],
                  "correct": 1,
                  "explanation": "Los tratamientos incompletos exponen a las bacterias a concentraciones subóptimas del fármaco, favoreciendo la selección de las subpoblaciones más resistentes que sobreviven a esa exposición parcial."
                },
                {
                  "id": 479,
                  "question": "En un hospital se identifica que varios pacientes de la misma sala desarrollan infecciones por la misma cepa de Klebsiella pneumoniae productora de carbapenemasa (KPC). ¿Qué mecanismo de transmisión debe investigarse, además de la transmisión cruzada por manos del personal?",
                  "options": [
                    "Ningún otro mecanismo es posible además del contacto directo",
                    "La posible transferencia horizontal del gen de resistencia (plásmido) entre distintas bacterias presentes en el mismo entorno, además de la transmisión clonal de la misma cepa",
                    "La resistencia solo pudo haberse originado de forma espontánea e independiente en cada paciente",
                    "La transmisión únicamente pudo ocurrir por vía respiratoria"
                  ],
                  "correct": 1,
                  "explanation": "Además de la diseminación clonal de una misma cepa, debe considerarse la transferencia horizontal de plásmidos de resistencia entre distintas bacterias coexistentes en el ambiente hospitalario."
                },
                {
                  "id": 480,
                  "question": "Un paciente con infección urinaria recurrente ha recibido múltiples ciclos de antibióticos de amplio espectro por automedicación en el último año. ¿Qué riesgo genera esta conducta a nivel individual y comunitario?",
                  "options": [
                    "Ningún riesgo, ya que los antibióticos de amplio espectro son siempre seguros",
                    "A nivel individual, aumenta el riesgo de seleccionar cepas resistentes en su propia flora; a nivel comunitario, contribuye a la diseminación de resistencia mediante transferencia horizontal de genes entre bacterias",
                    "Solo genera riesgo a nivel individual, nunca a nivel comunitario",
                    "Reduce el riesgo de resistencia al exponer a las bacterias a múltiples fármacos distintos"
                  ],
                  "correct": 1,
                  "explanation": "El uso repetido e indiscriminado de antibióticos de amplio espectro por automedicación favorece la selección de resistencia tanto en la flora propia del paciente como en la comunidad, por mecanismos de transferencia horizontal."
                },
                {
                  "id": 481,
                  "question": "Un paciente con neutropenia febril post-quimioterapia desarrolla bacteriemia por una cepa con una bomba de eflujo activa de amplio espectro. ¿Por qué este mecanismo es particularmente preocupante comparado con la inactivación enzimática de un solo fármaco?",
                  "options": [
                    "Porque las bombas de eflujo son menos frecuentes que las enzimas inactivadoras",
                    "Porque las bombas de eflujo pueden conferir resistencia simultánea a múltiples familias de antibióticos no relacionadas estructuralmente, a diferencia de una enzima específica para una sola familia",
                    "Porque las bombas de eflujo solo afectan a un único antibiótico específico",
                    "Porque las bombas de eflujo no tienen impacto clínico real"
                  ],
                  "correct": 1,
                  "explanation": "A diferencia de una enzima que suele inactivar una sola familia de antibióticos, las bombas de eflujo pueden expulsar simultáneamente fármacos de múltiples clases, generando resistencia de amplio espectro."
                },
                {
                  "id": 482,
                  "question": "En una comunidad rural con venta libre de antibióticos sin prescripción médica, ¿qué relación existe entre esta práctica y el desarrollo de resistencia antimicrobiana comunitaria?",
                  "options": [
                    "No existe ninguna relación entre la venta libre y la resistencia",
                    "El uso indiscriminado, la automedicación y las dosis/duraciones inadecuadas favorecen la exposición subóptima de las bacterias al fármaco, promoviendo la selección y diseminación de cepas resistentes en la comunidad",
                    "La venta libre de antibióticos reduce la resistencia al facilitar el acceso al tratamiento",
                    "Solo el uso hospitalario de antibióticos contribuye a la resistencia comunitaria"
                  ],
                  "correct": 1,
                  "explanation": "El acceso sin regulación a antibióticos favorece dosis y duraciones inadecuadas, generando presión selectiva subóptima que promueve la aparición de resistencia a nivel comunitario."
                },
                {
                  "id": 483,
                  "question": "Un paciente con fibrosis quística colonizado crónicamente con Pseudomonas aeruginosa desarrolla, con los años, resistencia progresiva a múltiples antibióticos usados repetidamente. ¿Qué fenómeno biológico explica esta evolución?",
                  "options": [
                    "La bacteria pierde espontáneamente su capacidad de causar infección",
                    "La exposición repetida y prolongada al mismo fármaco o familia ejerce presión de selección continua sobre la población bacteriana colonizante, favoreciendo la acumulación progresiva de mecanismos de resistencia",
                    "La resistencia progresiva no tiene relación con el uso repetido de antibióticos",
                    "El paciente desarrolla inmunidad que hace innecesarios los antibióticos"
                  ],
                  "correct": 1,
                  "explanation": "La exposición crónica y repetida a los mismos antibióticos en pacientes colonizados de forma persistente favorece la acumulación progresiva de mecanismos de resistencia en la población bacteriana."
                },
                {
                  "id": 484,
                  "question": "Un laboratorio detecta en un mismo paciente dos especies bacterianas distintas (E. coli y Klebsiella pneumoniae) portando el mismo gen de resistencia a carbapenémicos (blaKPC). ¿Qué mecanismo explica que especies diferentes compartan un gen idéntico de resistencia?",
                  "options": [
                    "Es imposible que dos especies distintas compartan el mismo gen de resistencia",
                    "Transferencia horizontal de genes mediante un plásmido conjugativo compartido entre ambas especies, que puede colonizar el mismo huésped y transferirse independientemente de la especie bacteriana",
                    "Ambas especies desarrollaron la misma mutación de forma independiente y simultánea por azar",
                    "El gen fue transferido por transformación exclusivamente, sin participación de plásmidos"
                  ],
                  "correct": 1,
                  "explanation": "La transferencia horizontal mediante plásmidos conjugativos permite que un mismo gen de resistencia se disemine entre especies bacterianas distintas que coexisten en el mismo huésped."
                },
                {
                  "id": 485,
                  "question": "Ante el aumento de infecciones por bacterias multirresistentes en su hospital, el comité de infecciones implementa un programa de optimización de antimicrobianos (PROA). ¿Qué objetivo epidemiológico busca principalmente esta estrategia?",
                  "options": [
                    "Aumentar el uso de antibióticos de amplio espectro en todos los pacientes",
                    "Reducir la presión de selección antibiótica innecesaria mediante el uso racional (dosis, duración y espectro adecuados), disminuyendo así la aparición y diseminación de mecanismos de resistencia a nivel institucional",
                    "Eliminar por completo el uso de antibióticos en el hospital",
                    "Sustituir todos los antibióticos por antisépticos tópicos"
                  ],
                  "correct": 1,
                  "explanation": "Los programas de optimización de antimicrobianos (PROA) buscan racionalizar el uso de antibióticos para reducir la presión de selección y contener la aparición y diseminación de resistencia."
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
      "icon": "🔬",
      "colorClass": "week-green",
      "title": "Micología, Parasitología y Farmacología Antiinfecciosa",
      "description": "Estudia la biología de hongos y parásitos de importancia médica, junto con la farmacología de los antihelmínticos y antimicóticos.",
      "modules": [
        {
          "id": "micologia",
          "title": "Introducción a la Micología Médica",
          "description": "Estudia la biología general de los hongos, su clasificación y reproducción, y las principales micosis superficiales, subcutáneas y sistémicas de interés clínico.",
          "topics": [
            "Biología fúngica: nutrición, condiciones de crecimiento y reproducción asexual",
            "Clasificación de las micosis: superficiales, subcutáneas, intermedias y sistémicas",
            "Diagnóstico micológico: KOH, tinta china, histopatología y cultivo",
            "Patogenicidad fúngica, dimorfismo térmico y correlación clínica"
          ],
          "sections": [
            {
              "title": "Fundamentos Teóricos",
              "questions": [
                {
                  "id": 306,
                  "question": "¿Cuál es el rango de pH e intervalo de temperatura ideal para el crecimiento de la mayoría de los hongos?",
                  "options": [
                    "pH 7.2-7.8 y 37°C a 42°C",
                    "pH 5.0-6.0 y 22°C a 32°C",
                    "pH 3.0-4.0 y 4°C a 15°C",
                    "pH 8.5-9.0 y 45°C a 55°C"
                  ],
                  "correct": 1,
                  "explanation": "Según la presentación, la temperatura ideal para el crecimiento de los hongos es de 22-32°C y crecen en un pH óptimo de 5-6."
                },
                {
                  "id": 307,
                  "question": "¿Cómo se nutren los hongos desde el punto de vista metabólico?",
                  "options": [
                    "Por fagocitosis activa",
                    "Por fotosíntesis oxigénica",
                    "Por ósmosis (absorción)",
                    "Por endocitosis mediada por receptores"
                  ],
                  "correct": 2,
                  "explanation": "Los hongos son organismos heterótrofos que carecen de propiedad fotosintética y se nutren por ósmosis."
                },
                {
                  "id": 308,
                  "question": "¿Qué estructuras forman las talosporas en la reproducción asexual fúngica?",
                  "options": [
                    "Esporangiosporas y macroconidias",
                    "Artrosporas, blastosporas y clamidosporas",
                    "Microconidias y cuerpos escleróticos",
                    "Cuerpos asteroides y hifas aseptadas"
                  ],
                  "correct": 1,
                  "explanation": "La diapositiva de reproducción asexuada clasifica las talosporas en artrosporas, blastosporas y clamidosporas."
                },
                {
                  "id": 309,
                  "question": "¿Cuál de los siguientes agentes etiológicos de micosis superficiales es una levadura lipofílica?",
                  "options": [
                    "Trichophyton rubrum",
                    "Epidermophyton floccosum",
                    "Malassezia spp.",
                    "Microsporum canis"
                  ],
                  "correct": 2,
                  "explanation": "Malassezia spp. es descrita en la tabla comparativa de micosis superficiales como una levadura lipofílica causante de Pitiriasis versicolor."
                },
                {
                  "id": 310,
                  "question": "¿Qué hallazgo microscópico en tejido es patognomónico de la Cromoblastomicosis?",
                  "options": [
                    "Levaduras en \"rueda de timón\"",
                    "Cuerpos escleróticos o células en \"moneda de cobre\"",
                    "Cuerpos asteroides",
                    "Levaduras encapsuladas"
                  ],
                  "correct": 1,
                  "explanation": "La tabla de micosis intermedias indica que el diagnóstico micológico e histopatológico de la cromoblastomicosis revela cuerpos escleróticos (células en \"moneda de cobre\")."
                },
                {
                  "id": 311,
                  "question": "¿Cuáles son los cuatro grupos principales de micosis profundas/sistémicas presentados en el texto?",
                  "options": [
                    "Tiñas, Piedras, Tinea negra y Candidiasis",
                    "Esporotricosis, Cromoblastomicosis, Micetoma y Actinomicosis",
                    "Candidiasis, Paracoccidioidomicosis, Histoplasmosis y Criptococosis",
                    "Pitiriasis versicolor, Aspergilosis, Mucormicosis y Dermatofitosis"
                  ],
                  "correct": 2,
                  "explanation": "En la diapositiva de \"Micosis profundas\" se listan expresamente: Candidiasis, Paracoccidioidomicosis, Histoplasmosis y Criptococosis."
                },
                {
                  "id": 312,
                  "question": "¿Cuál es el medio de cultivo estándar utilizado para el aislamiento de hongos mencionado en la guía?",
                  "options": [
                    "Agar MacConkey",
                    "Agar Sabouraud / Mycosel",
                    "Agar Sangre",
                    "Agar Mueller-Hinton"
                  ],
                  "correct": 1,
                  "explanation": "La diapositiva sobre diagnóstico muestra el cultivo en medios estandarizados como Sabouraud y Mycosel."
                },
                {
                  "id": 313,
                  "question": "¿Qué estructura microscópica característica presenta la fase levaduriforme de Paracoccidioides spp.?",
                  "options": [
                    "Cuerpos escleróticos oscuros",
                    "Levadura multigemante con aspecto en \"rueda de timón\"",
                    "Levaduras intracelulares dentro de macrófagos",
                    "Hifas no septadas gruesas"
                  ],
                  "correct": 1,
                  "explanation": "La tabla comparativa de micosis sistémicas especifica que Paracoccidioides spp. muestra en la microscopía una \"levadura multigemante (rueda de timón)\"."
                },
                {
                  "id": 314,
                  "question": "¿Qué determinante de patogenicidad fúngica actúa inhibiendo la tirosinasa y la formación del fagolisosoma?",
                  "options": [
                    "Queratinasa",
                    "Melanina",
                    "Adhesinas",
                    "Pseudomicelios"
                  ],
                  "correct": 1,
                  "explanation": "En la lista de determinantes de patogenicidad se indica que la Melanina inhibe la tirosinasa e inhibe el fagolisosoma."
                },
                {
                  "id": 315,
                  "question": "¿Cuál es el principal sitio de infección y tipo de lesión de la Pitiriasis versicolor?",
                  "options": [
                    "Pelo y uñas con destrucción folicular",
                    "Dermis profunda con fístulas y granos",
                    "Estrato córneo con máculas hipo o hiperpigmentadas y fina descamación",
                    "Mucosa oral con placas blanquecinas desprendibles"
                  ],
                  "correct": 2,
                  "explanation": "En la tabla comparativa de micosis superficiales, el sitio de infección de Malassezia spp. es el estrato córneo y su lesión se describe como máculas hipo o hiperpigmentadas con fina descamación."
                }
              ]
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 316,
                  "question": "Un laboratorio analiza una muestra de raspado cutáneo con KOH. Al microscopio se observan \"hifas cortas y levaduras\" en una disposición descrita clásicamente como \"espagueti y albóndigas\". ¿Qué enfermedad se debe diagnosticar?",
                  "options": [
                    "Dermatofitosis por <em>Trichophyton</em>",
                    "Pitiriasis versicolor por <em>Malassezia spp.</em>",
                    "Tinea nigra por hongos dematiáceos",
                    "Esporotricosis cutánea"
                  ],
                  "correct": 1,
                  "explanation": "La observación de \"levaduras y hifas cortas (espagueti y albóndigas)\" en examen directo con KOH es el diagnóstico micológico de la Pitiriasis versicolor."
                },
                {
                  "id": 317,
                  "question": "Al comparar el diagnóstico directo mediante KOH entre una Dermatofitosis y una Pitiriasis versicolor, ¿cuál es la diferencia microscópica fundamental?",
                  "options": [
                    "La Dermatofitosis muestra cisticercos y la Pitiriasis muestra granos negros",
                    "La Dermatofitosis muestra hifas septadas; la Pitiriasis muestra levaduras y hifas cortas",
                    "La Dermatofitosis presenta levaduras encapsuladas y la Pitiriasis bacterias filamentosas",
                    "Ambas muestran la misma morfología pero varía el cultivo en Sabouraud"
                  ],
                  "correct": 1,
                  "explanation": "La tabla de la UNAB especifica que en la Dermatofitosis se observan \"hifas septadas\", mientras que en Pitiriasis versicolor se observan \"levaduras y hifas cortas\"."
                },
                {
                  "id": 318,
                  "question": "Un examen de esputo teñido con Tinta China revela células esféricas rodeadas por un halo transparente amplio (cápsula). ¿Qué microorganismo se predice encontrar y qué prueba confirmatoria rápida en suero/LCR está indicada?",
                  "options": [
                    "<em>Histoplasma capsulatum</em>; prueba de queratinasa",
                    "<em>Cryptococcus neoformans</em>; Detección del antígeno CrAg",
                    "<em>Paracoccidioides brasiliense</em>; cultivo en Agar MacConkey",
                    "<em>Candida albicans</em>; coloración de Gram"
                  ],
                  "correct": 1,
                  "explanation": "<em>Cryptococcus neoformans</em> se identifica como levadura encapsulada teñida con tinta china, y su diagnóstico confirmatorio rápido es el antígeno CrAg en LCR/suero."
                },
                {
                  "id": 319,
                  "question": "Al realizar la tinción e histopatología de un exudado purulento proveniente de un micetoma, se observan \"granos negros\". ¿Qué interpretación etiológica se concluye?",
                  "options": [
                    "Se trata de un actinomicetoma causado por bacterias (<em>Nocardia</em>, <em>Actinomyces</em>)",
                    "Se trata de un eumetoma causado por hongos verdaderos (<em>Madurella</em>, <em>Scedosporium</em>)",
                    "Es una infección viral secundaria a trauma vegetal",
                    "Es una invasión por protozoarios apicomplexa"
                  ],
                  "correct": 1,
                  "explanation": "En la tabla comparativa de Micetomas se especifica que los granos negros corresponden a micetomas micóticos (hongos como <em>Madurella</em>), mientras que los granos amarillos o blancos corresponden a bacterias."
                },
                {
                  "id": 320,
                  "question": "¿Qué diferencia la vía de inoculación/ingreso de las micosis intermedias (como Esporotricosis) frente a las micosis profundas sistémicas (como Histoplasmosis)?",
                  "options": [
                    "Las intermedias entran por vía gastrointestinal y las profundas por la piel",
                    "Las intermedias entran por trauma de piel (espinas/suelo) y las profundas por inhalación",
                    "Las intermedias se transmiten por vectores y las profundas por contacto directo",
                    "Ambas ingresan exclusivamente por la vía genitourinaria"
                  ],
                  "correct": 1,
                  "explanation": "La Esporotricosis, Cromoblastomicosis y Micetoma ingresan por trauma cutáneo (vía inoculación), mientras que Paracoccidioidomicosis, Histoplasmosis y Criptococosis ingresan por inhalación."
                },
                {
                  "id": 321,
                  "question": "Si un hongo carece de la enzima queratinasa, ¿qué efecto se predice sobre su capacidad infectiva?",
                  "options": [
                    "No podrá invadir tejidos ricos en queratina como piel, pelo y uñas",
                    "Se volverá inmune al tratamiento con antifúngicos tópicos",
                    "Inhibirá automáticamente la fagocitosis en macrófagos",
                    "Formará capsulas gruesas de polisacáridos"
                  ],
                  "correct": 0,
                  "explanation": "Las queratinasas son enzimas y determinantes de patogenicidad que permiten a los dermatofitos degradar la queratina e infectar la piel, pelo y uñas."
                },
                {
                  "id": 322,
                  "question": "Un informe de biopsia pulmonar describe \"levaduras pequeñas intracelulares dentro de macrófagos\". ¿Cuál es el patógeno causante?",
                  "options": [
                    "<em>Cryptococcus gattii</em>",
                    "<em>Paracoccidioides spp.</em>",
                    "<em>Histoplasma capsulatum</em>",
                    "<em>Sporothrix schenckii</em>"
                  ],
                  "correct": 2,
                  "explanation": "En la tabla comparativa de micosis sistémicas, la microscopía diagnóstica de Histoplasmosis se caracteriza por \"levaduras intracelulares en macrófagos\"."
                },
                {
                  "id": 323,
                  "question": "¿Cuál es el mecanismo de patogenicidad mediante el cual la cáscara/cápsula de polisacáridos de <em>Cryptococcus</em> favorece la infección?",
                  "options": [
                    "Secreción de exotoxinas citolíticas",
                    "Evasión de la respuesta inmune mediante inhibición de la phagocitosis",
                    "Destrucción directa de las células epiteliales del estrato córneo",
                    "Producción de hifas aseptadas de rápido crecimiento"
                  ],
                  "correct": 1,
                  "explanation": "La diapositiva \"Determinantes de patogenicidad\" indica explícitamente que la cápsula actúa en la \"Evasión de la respuesta inmune\"."
                },
                {
                  "id": 324,
                  "question": "¿Por qué el tratamiento de la Pitiriasis versicolor se limita a antifúngicos tópicos, a diferencia de los dermatofitos severos que pueden requerir terapia sistémica?",
                  "options": [
                    "Porque <em>Malassezia spp.</em> se ubica únicamente en el estrato córneo superficial",
                    "Porque la piel desprendida no permite el paso de fármacos sistémicos",
                    "Porque <em>Malassezia spp.</em> destruye los vasos sanguíneos dérmicos",
                    "Porque los dermatofitos no son seres eucariotas"
                  ],
                  "correct": 0,
                  "explanation": "La tabla de la UNAB señala que el sitio de infección de Pitiriasis versicolor es el estrato córneo superficial, por lo que responde adecuadamente a antifúngicos tópicos."
                },
                {
                  "id": 325,
                  "question": "¿Qué hallazgo histopatológico caracteriza la infección por <em>Sporothrix schenckii</em> en muestras tisulares?",
                  "options": [
                    "Cuerpos escleróticos de color café",
                    "Cuerpos asteroides",
                    "Levaduras intracelulares en eritrocitos",
                    "Granos amorfos con hifas no septadas"
                  ],
                  "correct": 1,
                  "explanation": "La tabla de micosis intermedias menciona que en la histopatología de la esporotricosis se observan \"cuerpos asteroides\"."
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 326,
                  "question": "Caso Clínico 1: Un agricultor sufre una punción accidental en la mano derecha con una espina de rosal. Semanas después desarrolla un nódulo indoloro en el sitio de trauma y una cadena de nódulos eritematosos que siguen el trayecto linfático del brazo. ¿Qué micosis y agente se sospechan?",
                  "options": [
                    "Cromoblastomicosis por <em>Fonsecaea pedrosoi</em>",
                    "Esporotricosis por <em>Sporothrix schenckii</em>",
                    "Micetoma actinomicótico por <em>Nocardia</em>",
                    "Histoplasmosis diseminada por <em>Histoplasma capsulatum</em>"
                  ],
                  "correct": 1,
                  "explanation": "El cuadro de trauma con espinas de rosas y la aparición de nódulos en patrón esporotricoide (linfocutáneo) es la presentación clásica de <em>Sporothrix schenckii</em>."
                },
                {
                  "id": 327,
                  "question": "Caso Clínico 2: Paciente con VIH avanzado (recuento de CD4 < 50 cel/mm³) presenta cefalea intensa, fiebre y rigidez de nuca. La tinción de LCR con Tinta China es positiva para levaduras encapsuladas. ¿Qué patología padece y cuál fue su vía de ingreso más probable?",
                  "options": [
                    "Criptococosis (meningitis); vía inhalatoria por excrementos de palomas",
                    "Paracoccidioidomicosis; vía trauma cutáneo",
                    "Candidiasis meníngea; vía endógena intestinal",
                    "Histoplasmosis cerebral; inoculación directa"
                  ],
                  "correct": 0,
                  "explanation": "La Criptococosis provoca meningitis diseminada en inmunosuprimidos, la levadura es encapsulada (tinta china) y su vía de ingreso es inhalatoria a partir de excrementos de aves/palomas."
                },
                {
                  "id": 328,
                  "question": "Un paciente presenta una placa anular descamativa en la ingle con borde activo eritematoso. El médico sospecha dermatofitosis pero decide no solicitar laboratorio e iniciar esteroides tópicos. ¿Qué consecuencia patogénica se prevé?",
                  "options": [
                    "Erradicación completa del hongo al bloquear las queratinasas",
                    "Empeoramiento y diseminación de la infección al suprimir la respuesta inmune local",
                    "Transformación del dermatofito en hongo dimórfico",
                    "Formación inmediata de cuerpos escleróticos en la epidermis"
                  ],
                  "correct": 1,
                  "explanation": "Los esteroides inhiben la respuesta inmune tisular; como la patogenia micótica requiere control inmunológico, el uso de esteroides exacerba las dermatofitosis (tiña incógnita)."
                },
                {
                  "id": 329,
                  "question": "Caso Clínico 3: Un trabajador de construcción en áreas rurales presenta úlceras dolorosas en la mucosa oral y lesiones pulmonares. El examen microscópico del exudado revela una levadura de gran tamaño con múltiples brotes periféricos adosados. ¿Cuál es el diagnóstico más probable?",
                  "options": [
                    "Criptococosis pulmonar",
                    "Paracoccidioidomicosis",
                    "Pitiriasis versicolor",
                    "Histoplasmosis diseminada"
                  ],
                  "correct": 1,
                  "explanation": "La Paracoccidioidomicosis ingresa por inhalación, genera lesiones en pulmón y úlceras mucosas en boca, y su microscopía muestra levaduras multigemantes en rueda de timón."
                },
                {
                  "id": 330,
                  "question": "¿Qué sucedería si un hongo dimórfico patógeno pierde la capacidad de realizar la transición morfológica de moho a levadura al ingresar al hospedador humano ($37^\\circ\\text{C}$)?",
                  "options": [
                    "Aumentaría masivamente su secreción de queratinasa",
                    "Perdería su principal determinante de virulencia para establecer infección invasiva",
                    "Desarrollaría resistencia a los antifúngicos por producción de melanina",
                    "Produciría endotoxinas destructoras de macrófagos"
                  ],
                  "correct": 1,
                  "explanation": "El dimorfismo es un determinante de patogenicidad crítico; la forma de levadura a $37^\\circ\\text{C}$ es la fase adaptada para sobrevivir y proliferar en los tejidos humanos."
                },
                {
                  "id": 331,
                  "question": "Caso Clínico 4: Un campesino acude por una lesión tumefacta en el pie derecho con múltiples orificios fistulosos que drenan pus y un material granular amarillento. Al examen microscópico se identifican estructuras filamentosas muy delgadas grampositivas. ¿Cómo clasifica clínicamente este caso?",
                  "options": [
                    "Eumetoma (Micetoma fúngico por <em>Madurella</em>)",
                    "Actinomicetoma (Micetoma bacteriano por <em>Nocardia/Actinomyces</em>)",
                    "Cromoblastomicosis verrugosa",
                    "Esporotricosis fija cutánea"
                  ],
                  "correct": 1,
                  "explanation": "Los micetomas con drenaje de granos amarillos/blancos formados por estructuras filamentosas delgadas son actinomicetomas (causados por bacterias como <em>Nocardia</em> o <em>Actinomyces</em>)."
                },
                {
                  "id": 332,
                  "question": "Paciente masculino con manchas decoloradas (hipopigmentadas) en la espalda que se evidencian más tras la exposición solar en verano. El rascado de la piel desprende una fina descamación. ¿Qué mecanismo patogénico del hongo causa la alteración del color de la piel?",
                  "options": [
                    "Producción de queratinasa que destruye la dermis superficial",
                    "Alteración de la producción de melanina por los metabolitos lipídicos de <em>Malassezia spp.</em>",
                    "Invasión de macrófagos y fagocitosis de los melanosomas",
                    "Formación de pseudomicelios obstructivos en los folículos pilosos"
                  ],
                  "correct": 1,
                  "explanation": "<em>Malassezia spp.</em> produce ácidos dicarboxílicos que inhiben la tirocina en los melanocitos, generando las máculas hipopigmentadas características."
                },
                {
                  "id": 333,
                  "question": "Si un laboratorio reporta la presencia de \"hongos en la muestra\", pero el médico recuerda el principio patogénico fundamental: \"El hongo infecta al hombre por accidente y el cuerpo humano no produce endotoxinas ni exotoxinas fúngicas\", ¿cómo debe interpretarse la lesión observada en el paciente?",
                  "options": [
                    "El daño tisular es producto de las exotoxinas liberadas por el moho",
                    "La enfermedad es resultado de la respuesta inmune del hospedador y sus productos metabólicos frente al hongo",
                    "La lesión es causada por la proliferación de virus dentro de las hifas",
                    "El hongo requiere obligatoriamente del cuerpo humano para completar su ciclo reproductivo"
                  ],
                  "correct": 1,
                  "explanation": "La diapositiva \"Mecanismos de Patogenicidad\" señala que el cuerpo no es propicio para el hongo, no produce endotoxinas ni exotoxinas y la enfermedad es producto de la respuesta al hongo y sus productos metabólicos."
                },
                {
                  "id": 334,
                  "question": "Caso Clínico 5: Un ecologista explora cunas de murciélagos en una cueva abandonada. Semanas después presenta fiebre, tos y visceromegalia (hepatomegalia y esplenomegalia). La microscopía muestra levaduras pequeñas en el interior de los macrófagos tisulares. ¿Qué exposición epidemiológica determinó este cuadro?",
                  "options": [
                    "Inhalación de esporas de <em>Histoplasma capsulatum</em> presentes en guano de murciélago",
                    "Trauma cutáneo con espinas contaminadas por <em>Sporothrix</em>",
                    "Inhalación de excretas de paloma contaminadas con <em>Cryptococcus</em>",
                    "Ingestión de agua con quistes de <em>Paracoccidioides</em>"
                  ],
                  "correct": 0,
                  "explanation": "La inhalación de esporas en suelo contaminado con excretas de aves o murciélagos es el mecanismo de transmisión de <em>Histoplasma capsulatum</em>, el cual afecta pulmón, hígado y bazo."
                },
                {
                  "id": 335,
                  "question": "Un paciente inmunocomprometido desarrolla placas blanquecinas en la mucosa oral y el esófago (algodoncillo). La tinción de Gram revela levaduras en brotación con formación de pseudomicelios. ¿Por qué la presencia de pseudomicelios es relevante clínicamente?",
                  "options": [
                    "Indica que se trata de una dermatofitosis cutánea",
                    "Es una forma de crecimiento y determinante de patogenicidad que facilita la invasión tisular de <em>Candida spp.</em>",
                    "Demuestra la presencia de un actinomicetoma bacteriano",
                    "Es una estructura reproductora sexual encargada de formar clamidosporas"
                  ],
                  "correct": 1,
                  "explanation": "La formación de pseudomicelios en <em>Candida</em> facilita la adherencia e invasión tisular, figurando en la lista de determinantes de patogenicidad de la micosis profunda/candidiasis."
                }
              ]
            }
          ]
        },
        {
          "id": "parasitologia",
          "title": "Introducción a la Parasitología Médica",
          "description": "Comprende los conceptos generales de los ciclos biológicos parasitarios y la clasificación de helmintos y protozoos de importancia médica.",
          "topics": [
            "Ciclos biológicos: monoxénico vs. heteroxénico, hospedador definitivo e intermediario",
            "Clasificación de helmintos: Nematodos, Céstodos y Tremátodos",
            "Clasificación de protozoos: flagelados, amebas, ciliados y Apicomplexa",
            "Vías de infección, diagnóstico y correlación clínica de las principales parasitosis"
          ],
          "sections": [
            {
              "title": "Fundamentos Teóricos",
              "questions": [
                {
                  "id": 336,
                  "question": "¿Cómo se define un ciclo biológico heteroxénico en parasitología?",
                  "options": [
                    "Aquel que ocurre en un solo hospedador sin fases larvarias",
                    "Desarrollo del parásito que requiere dos o más hospedadores de diferentes especies para completar su ciclo de vida",
                    "Aquel que solo afecta a artrópodos vectores de vida libre",
                    "Ciclo reproductor realizado exclusivamente en el medio ambiente"
                  ],
                  "correct": 1,
                  "explanation": "La guía define explícitamente el ciclo heteroxénico como el \"desarrollo del parásito que requiere dos o más hospedadores de diferentes especies para completar su ciclo de vida\"."
                },
                {
                  "id": 337,
                  "question": "¿Qué diferencia taxonómica y estructural existe entre los Nematodos y los Céstodos?",
                  "options": [
                    "Los Nematodos son aplanados y hermafroditas; los Céstodos son cilíndricos de sexos separados",
                    "Los Nematodos son cilíndricos con sexos separados; los Céstodos son aplanados, hermafroditas y segmentados",
                    "Los Nematodos miden hasta 9 metros y los Céstodos máximo 35 cm",
                    "Los Nematodos tienen ciclo heteroxénico obligatorio y los Céstodos monoxénico"
                  ],
                  "correct": 1,
                  "explanation": "En la tabla comparativa de helmintos se detalla que los Nematodos son cilíndricos, de sexos separados y cuerpo en unidad, mientras que los Céstodos son aplanados, hermafroditas y de cuerpo segmentado."
                },
                {
                  "id": 338,
                  "question": "¿Cuál de los siguientes protozoos pertenece al grupo de los Flagelados Kinetoplástidos (con kinetoplasto)?",
                  "options": [
                    "<em>Entamoeba histolytica</em>",
                    "<em>Giardia lamblia</em>",
                    "<em>Trypanosoma cruzi</em>",
                    "<em>Balantidium coli</em>"
                  ],
                  "correct": 2,
                  "explanation": "La diapositiva sobre flagelados divide el grupo en \"Con kinetoplasto\" (<em>Trypanosoma</em>, <em>Leishmania</em>) y \"Sin kinetoplasto\" (<em>Giardia</em>, <em>Trichomonas</em>)."
                },
                {
                  "id": 339,
                  "question": "¿Qué técnica diagnóstica es de elección para confirmar la presencia de <em>Enterobius vermicularis</em>?",
                  "options": [
                    "Examen coprológico por concentración",
                    "Prueba de la cinta adhesiva (Método de Graham) en la región perianal",
                    "Biopsia muscular",
                    "Gota gruesa en sangre periférica"
                  ],
                  "correct": 1,
                  "explanation": "En la tabla comparativa de helmintos se especifica que la forma diagnóstica de <em>Enterobius vermicularis</em> se obtiene mediante la \"prueba de la cinta adhesiva (método de Graham)\"."
                },
                {
                  "id": 340,
                  "question": "¿Cuál es la forma infectante y la vía de ingreso de <em>Ascaris lumbricoides</em>?",
                  "options": [
                    "Larva filariforme (L3); penetración por la piel",
                    "Huevo embrionado; ingestión fecal-oral",
                    "Trophozoito; inoculación por picadura de insecto",
                    "Larva rabditoide; transmisión transplacentaria"
                  ],
                  "correct": 1,
                  "explanation": "La tabla de intestinales de la UNAB indica que la forma infectante de <em>Ascaris lumbricoides</em> es el \"Huevo embrionado\" y su vía de ingreso es la \"Ingestión de huevos\"."
                },
                {
                  "id": 341,
                  "question": "¿Qué función cumple el Hospedador Definitivo en el ciclo de vida de un parásito?",
                  "options": [
                    "Organismo donde se desarrollan las fases larvarias o asexuales",
                    "Organismo donde el parásito alcanza la fase adulta y realiza la reproducción sexual",
                    "Vector mecánico que transporta el parásito en sus patas",
                    "Ambiente inerte donde el huevo madura en el suelo"
                  ],
                  "correct": 1,
                  "explanation": "En el esquema de ciclos heteroxénicos se define Hospedador Definitivo como el \"Organismo donde el parásito alcanza la fase adulta y realiza la reproducción (sexual)\"."
                },
                {
                  "id": 342,
                  "question": "¿Cuál es el único protozoo ciliado de importancia médica humana presentado en la guía?",
                  "options": [
                    "<em>Trichomonas vaginalis</em>",
                    "<em>Balantidium coli</em>",
                    "<em>Cryptosporidium parvum</em>",
                    "<em>Acanthamoeba spp.</em>"
                  ],
                  "correct": 1,
                  "explanation": "En la lista de protozoos, <em>Balantidium coli</em> es señalado como el representante principal de los Ciliados."
                },
                {
                  "id": 343,
                  "question": "¿Qué partes anatómicas principales componen el cuerpo de un Céstodo adulto?",
                  "options": [
                    "Cabeza, tórax y abdomen",
                    "Escólex, cuello y estróbilo",
                    "Espícula, cutícula y ano",
                    "Pseudopoyos, cilio y vacuola"
                  ],
                  "correct": 1,
                  "explanation": "La diapositiva sobre Céstodos rotula sus tres partes morfológicas básicas: Escólex, Cuello y Estróbilo."
                },
                {
                  "id": 344,
                  "question": "¿Cuál de los siguientes nemátodos se diagnostica mediante el hallazgo de larvas rabditoides en heces frescas en lugar de huevos?",
                  "options": [
                    "<em>Trichuris trichiura</em>",
                    "<em>Strongyloides stercoralis</em>",
                    "<em>Necator americanus</em>",
                    "<em>Enterobius vermicularis</em>"
                  ],
                  "correct": 1,
                  "explanation": "La tabla comparativa indica que la forma diagnóstica en heces para <em>Strongyloides stercoralis</em> es la \"Larva Rabditoide\"."
                },
                {
                  "id": 345,
                  "question": "¿Qué grupo de parásitos son metazoos invertebrados dotados de exoesqueleto articulado (patas articuladas)?",
                  "options": [
                    "Platelmintos",
                    "Protozoos",
                    "Artrópodos (Insectos, Arácnidos, Crustáceos)",
                    "Nemátodos"
                  ],
                  "correct": 2,
                  "explanation": "El esquema de clasificación de parásitos ubica a los Artrópodos dentro de los Metazoos, subdivididos en Insectos, Arácnidos y Crustáceos."
                }
              ]
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 346,
                  "question": "¿Cuál es el hospedador definitivo y cuál el hospedador intermediario en el ciclo biológico de <em>Taenia solium</em>?",
                  "options": [
                    "Definitivo: Cerdo / Intermediario: Humano",
                    "Definitivo: Humano / Intermediario: Cerdo",
                    "Definitivo: Mosquito / Intermediario: Humano",
                    "Definitivo: Humano / Intermediario: Mosquito"
                  ],
                  "correct": 1,
                  "explanation": "El esquema de la UNAB especifica que en <em>Taenia solium</em>, el Humano es el Hospedador Definitivo (alberga el adulto en el intestino) y el Cerdo es el Hospedador Intermediario (alberga el cisticerco)."
                },
                {
                  "id": 347,
                  "question": "Al comparar el paso larvario tisular entre <em>Ascaris lumbricoides</em>, <em>Uncinarias</em> y <em>Strongyloides stercoralis</em>, ¿qué manifestación pulmonar clínica tienen en común durante su migración?",
                  "options": [
                    "Prolapso rectal masivo",
                    "Síndrome de Löeffler (neumonitis eosinofílica durante el paso bronquial)",
                    "Perforación intestinal",
                    "Meningoencefalitis amebiana"
                  ],
                  "correct": 1,
                  "explanation": "En la tabla comparativa de <em>Ascaris</em>, <em>Uncinarias</em> y <em>Strongyloides</em>, los tres parásitos realizan el tránsito pulmonar (sangre → pulmón → tráquea) causando el \"Síndrome de Löeffler\"."
                },
                {
                  "id": 348,
                  "question": "¿Qué diferencia la vía de ingreso al cuerpo humano entre el huevo de <em>Trichuris trichiura</em> y la larva de <em>Ancylostoma duodenale</em>?",
                  "options": [
                    "<em>Trichuris</em> entra por picadura de insecto y <em>Ancylostoma</em> por la vía oral",
                    "<em>Trichuris</em> entra por vía oral (ingestión de huevos) y <em>Ancylostoma</em> penetra por la piel (larva filariforme L3)",
                    "Ambos penetran activamente por los poros de la piel",
                    "Ambos ingresan mediante transfusión sanguínea"
                  ],
                  "correct": 1,
                  "explanation": "En las tablas diagnósticas, <em>Trichuris trichiura</em> ingresa por vía fecal-oral mediante ingestión de huevos maduros, mientras que <em>Ancylostoma/Necator</em> ingresan por penetración cutánea de la larva filariforme (L3)."
                },
                {
                  "id": 349,
                  "question": "Un coprológico revela huevos de helmitos con morfología de \"barril\" o \"balón de fútbol americano\" con tapones mucosos bipolares. ¿Qué nemátodo se identifica?",
                  "options": [
                    "<em>Ascaris lumbricoides</em>",
                    "<em>Trichuris trichiura</em> (Tricocéfalo)",
                    "<em>Enterobius vermicularis</em>",
                    "<em>Strongyloides stercoralis</em>"
                  ],
                  "correct": 1,
                  "explanation": "La imagen de la diapositiva y la tabla identifican el huevo de <em>Trichuris trichiura</em> con su forma alargada típica y tapones polares prominentes."
                },
                {
                  "id": 350,
                  "question": "En el ciclo biológico de <em>Plasmodium spp.</em>, ¿por qué el mosquito <em>Anopheles</em> es clasificado como el hospedador definitivo?",
                  "options": [
                    "Porque es el organismo donde ocurre la reproducción sexual (esporogonia)",
                    "Porque destruye los eritrocitos del humano",
                    "Porque realiza la esquizogonia hepática",
                    "Porque transmite quistes en sus heces"
                  ],
                  "correct": 0,
                  "explanation": "El diagrama de ciclo heteroxénico en protozoos indica que el mosquito <em>Anopheles</em> es el hospedador definitivo porque en él se lleva a cabo la fase sexual (esporogonia) tras ingerir los gametocitos."
                },
                {
                  "id": 351,
                  "question": "Si una persona camina descalza sobre suelos húmedos contaminados con heces humanas en una zona rural, ¿qué parásitos helmintos tienen el riesgo directo de penetrar su piel?",
                  "options": [
                    "<em>Ascaris lumbricoides</em> y <em>Trichuris trichiura</em>",
                    "Uncinarias (<em>Ancylostoma/Necator</em>) y <em>Strongyloides stercoralis</em>",
                    "<em>Enterobius vermicularis</em> y <em>Taenia solium</em>",
                    "<em>Giardia lamblia</em> y <em>Entamoeba histolytica</em>"
                  ],
                  "correct": 1,
                  "explanation": "La tabla comparativa indica que las Uncinarias (<em>Ancylostoma/Necator</em>) y <em>Strongyloides stercoralis</em> tienen como vía de ingreso la \"penetración por la piel\" de la larva filariforme."
                },
                {
                  "id": 352,
                  "question": "¿Qué consecuencia patológica directa genera la fijación masiva de adultos de Uncinarias (<em>Ancylostoma / Necator</em>) en la mucosa del intestino delgado?",
                  "options": [
                    "Prolapso rectal por esfuerzo",
                    "Anemia ferropénica por pérdida crónica de sangre",
                    "Prurito anal nocturno",
                    "Obstrucción mecánica del conducto colédoco"
                  ],
                  "correct": 1,
                  "explanation": "En la tabla de diagnóstico clínico de nemátodos, las Uncinarias (<em>Ancylostoma/Necator</em>) se asocian directamente con \"Anemia ferropénica\"."
                },
                {
                  "id": 353,
                  "question": "¿Cómo se diferencian el grupo de los Protozoos y el de los Metazoos en la clasificación general?",
                  "options": [
                    "Protozoos son pluricelulares; Metazoos son unicelulares",
                    "Protozoos son parásitos unicelulares; Metazoos son parásitos pluricelulares",
                    "Protozoos solo son bacterias; Metazoos son solo hongos",
                    "No existen diferencias taxonómicas entre ambos"
                  ],
                  "correct": 1,
                  "explanation": "El organigrama de la UNAB clasifica a los Protozoos como \"Parásitos unicelulares\" y a los Metazoos como pluricelulares (Helmintos y Artrópodos)."
                },
                {
                  "id": 354,
                  "question": "¿Cuál de los siguientes protozoos pertenece al filo Apicomplexa y carece de estructuras visibles de locomoción (como flagelos o cilios) en su fase madura?",
                  "options": [
                    "<em>Giardia lamblia</em>",
                    "<em>Toxoplasma gondii</em>",
                    "<em>Trichomonas vaginalis</em>",
                    "<em>Entamoeba histolytica</em>"
                  ],
                  "correct": 1,
                  "explanation": "<em>Toxoplasma gondii</em> y <em>Plasmodium falciparum</em> están listados en el grupo de los Apicomplexa, los cuales no poseen cilios ni flagelos para locomoción libre."
                },
                {
                  "id": 355,
                  "question": "¿Qué hallazgo clínico diferencia la infección severa por <em>Trichuris trichiura</em> de la infección por <em>Enterobius vermicularis</em>?",
                  "options": [
                    "<em>Trichuris</em> causa disentería, anemia y prolapso rectal; <em>Enterobius</em> causa prurito anal nocturno",
                    "<em>Trichuris</em> causa migración a la tráquea y <em>Enterobius</em> anemia severa",
                    "<em>Trichuris</em> produce quistes cutáneos y <em>Enterobius</em> lesiones hepáticas",
                    "Ambas presentan la misma sintomatología gastrointestinal"
                  ],
                  "correct": 0,
                  "explanation": "La tabla comparativa indica que <em>Trichuris</em> ocasiona \"Disentería, anemia y prolapso rectal\", mientras que <em>Enterobius</em> produce \"Prurito anal intenso, especialmente nocturno\"."
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 356,
                  "question": "Caso Clínico 1: Niño de 6 años es llevado a consulta por presentar insomnio, irritabilidad y prurito anal intenso de predominio nocturno. La madre refiere haber visto pequeños \"hilos blancos móviles\" en la región perianal mientras el niño dormía. ¿Qué parásito es y cuál es la prueba recomendada?",
                  "options": [
                    "<em>Ascaris lumbricoides</em>; Coprológico simple",
                    "<em>Enterobius vermicularis</em>; Cinta adhesiva de Graham",
                    "<em>Strongyloides stercoralis</em>; Examen de esputo",
                    "<em>Trichuris trichiura</em>; Rectoscopia"
                  ],
                  "correct": 1,
                  "explanation": "Las hembras de <em>Enterobius vermicularis</em> migran de noche a la región perianal a depositar huevos causando prurito nocturno; el diagnóstico de elección es la cinta de Graham."
                },
                {
                  "id": 357,
                  "question": "Caso Clínico 2: Paciente de 30 años en zona rural minera acude con astenia, fatiga extrema, palidez mucocutánea severa y hemoglobina de 6 g/dL. En heces se observan huevos ovalados de cubierta delgada de helmitos. ¿Cuál es el mecanismo de lesión que explica la anemia?",
                  "options": [
                    "Consumo del quilo intestinal por <em>Ascaris</em> de 35 cm",
                    "Fijación de <em>Ancylostoma / Necator</em> con sus piezas bucales a los capilares de la mucosa intestinal produciendo sangrado continuo",
                    "Destrucción directa de eritrocitos en el hígado por <em>Plasmodium</em>",
                    "Prolapso del colon rectosigmoide"
                  ],
                  "correct": 1,
                  "explanation": "Las uncinarias poseen cápsulas bucales cortantes/dientes con los que se fijan a la mucosa del intestino delgado absorbiendo sangre y produciendo anemia ferropénica."
                },
                {
                  "id": 358,
                  "question": "Un paciente pediátrico desnutrido expulsa por la boca un gusano cilíndrico rosado de 25 cm de longitud. Días después presenta dolor abdominal agudo e incapacidad para canalizar gases. ¿Qué complicación mecánica se está desencadenando?",
                  "options": [
                    "Obstrucción intestinal por maza/ovillo de <em>Ascaris lumbricoides</em>",
                    "Prolapso rectal por <em>Trichuris trichiura</em>",
                    "Neumonitis eosinofílica severa",
                    "Peritonitis amebiana por <em>Entamoeba</em>"
                  ],
                  "correct": 0,
                  "explanation": "<em>Ascaris lumbricoides</em> es el nemátodo de mayor tamaño (hasta 35 cm); las altas cargas parasitaria forman ovillos que causan obstrucción intestinal mecánica."
                },
                {
                  "id": 359,
                  "question": "Un médico trata a una comunidad con alta prevalencia de parasitosis. Si se confirma que el parásito tiene un ciclo monoxénico, ¿qué medida de control de salud pública es la más efectiva?",
                  "options": [
                    "Eliminar a los mosquitos vectores mediante insecticidas",
                    "Erradicar a los cerdos como hospedadores intermediarios",
                    "Mejorar el saneamiento básico, agua potable y lavado de manos (romper transmisión directa humano-ambiente)",
                    "Evitar el contacto con moluscos marinos"
                  ],
                  "correct": 2,
                  "explanation": "Los ciclos monoxénicos requieren un solo hospedador (humano), por lo que las medidas de higiene, agua segura y disposición de excretas evitan el contagio fecal-oral directo."
                },
                {
                  "id": 360,
                  "question": "Caso Clínico 3: Niño de 4 años con desnutrición crónica y evacuaciones mucosanguinolentas frecuentes. Durante el esfuerzo con el pujo defecatorio, la madre observa la protrusión de una masa roja a través del ano. ¿Qué helminto se relaciona patogénicamente con este prolapso rectal?",
                  "options": [
                    "<em>Trichuris trichiura</em>",
                    "<em>Enterobius vermicularis</em>",
                    "<em>Ancylostoma duodenale</em>",
                    "<em>Strongyloides stercoralis</em>"
                  ],
                  "correct": 0,
                  "explanation": "La fijación masiva del extremo anterior de <em>Trichuris trichiura</em> en la mucosa del ciego/colon genera hipotonía muscular, disentería y prolapso rectal."
                },
                {
                  "id": 361,
                  "question": "¿Qué ocurriría en el diagnóstico coprológico si una muestra infectada por <em>Strongyloides stercoralis</em> no se procesa de inmediato y se deja a temperatura ambiente por varios días?",
                  "options": [
                    "Las larvas rabditoides se destruyen y desaparecen completamente",
                    "Las larvas rabditoides pueden evolucionar a larvas filariformes infectantes (L3) o adultos de vida libre",
                    "Se sintetizan huevos de <em>Ascaris</em> falsos positivos",
                    "El parásito se convierte en protozoo flagelado"
                  ],
                  "correct": 1,
                  "explanation": "En el ambiente/suelo (o muestras no conservadas), la larva rabditoide de <em>Strongyloides</em> madura hacia la larva filariforme infectante (L3) o hacia formas adultas."
                },
                {
                  "id": 362,
                  "question": "Caso Clínico 4: Paciente adulto que consume carne de cerdo cruda o mal cocida infectada con cisticercos. ¿Qué forma clínica desarrollará en su intestino al cabo de unos meses?",
                  "options": [
                    "Cisticercosis cerebral grave",
                    "Teniasis intestinal por <em>Taenia solium</em> adulta",
                    "Hidatidosis hepática",
                    "Obstrucción pulmonar por larvas"
                  ],
                  "correct": 1,
                  "explanation": "La ingesta de carne de cerdo con cisticercos lleva al desarrollo del tenioide/adulto en el intestino delgado del humano (hospedador definitivo)."
                },
                {
                  "id": 363,
                  "question": "Si un paciente es infectado por un parásito protozoo del grupo Apicomplexa como <em>Plasmodium falciparum</em>, ¿cuál es la localización primaria de la fase reproductora asexual (esquizogonia) dentro del cuerpo humano?",
                  "options": [
                    "Superficie de la mucosa del colon",
                    "Hígado (hepatocitos) y eritrocitos (glóbulos rojos)",
                    "Lumen del yeyuno",
                    "Músculo estriado esquelético"
                  ],
                  "correct": 1,
                  "explanation": "En el esquema del ciclo de <em>Plasmodium</em>, la fase asexual (esquizogonia) cursa en el humano dividida entre los esquizontes hepáticos y los merozoítos en eritrocitos."
                },
                {
                  "id": 364,
                  "question": "¿Qué pasaría si un niño infectado por <em>Enterobius vermicularis</em> se rasca la zona perianal y luego se lleva los dedos a la boca sin lavarse las manos?",
                  "options": [
                    "Desarrollará un ciclo de autoinfección fecal-oral exógena reiniciando el desarrollo intestinal",
                    "Destruirá las larvas con las enzimas salivales de inmediato",
                    "El parásito migrara al pulmón produciendo tos crónica",
                    "Generará anemia ferropénica en 24 horas"
                  ],
                  "correct": 0,
                  "explanation": "La tabla de <em>Enterobius vermicularis</em> señala que la vía de ingreso es fecal-oral y advierte que puede ocurrir autoinfección mediante rascado e ingesta de huevos."
                },
                {
                  "id": 365,
                  "question": "Caso Clínico 5: Un paciente inmunosuprimido por quimioterapia presenta diarrea acuosa profusa, dolor abdominal y deshidratación. El examen coprológico teñido con Ziehl-Neelsen modificado revela oocistos esféricos ácido-alcohol resistentes. ¿A qué grupo de protozoos pertenece el patógeno responsable?",
                  "options": [
                    "Amebas (<em>Entamoeba histolytica</em>)",
                    "Flagelados sin kinetoplasto (<em>Giardia lamblia</em>)",
                    "Apicomplexa (<em>Cryptosporidium spp.</em>)",
                    "Ciliados (<em>Balantidium coli</em>)"
                  ],
                  "correct": 2,
                  "explanation": "<em>Cryptosporidium spp.</em> es un parásito protozoo perteneciente al filo Apicomplexa que se identifica como oocistos en heces."
                }
              ]
            }
          ]
        },
        {
          "id": "antihelminticos",
          "title": "Farmacología de Antihelmínticos y Antiamebianos",
          "description": "Revisa los mecanismos de acción, espectro y efectos adversos de los principales fármacos usados contra helmintos y amebas.",
          "topics": [
            "Benzimidazoles: mecanismo sobre la beta-tubulina",
            "Pirantel, piperazina e ivermectina: acción neuromuscular",
            "Praziquantel y niclosamida en infecciones por céstodos y tremátodos",
            "Metronidazol y otros antiamebianos: mecanismo y usos clínicos"
          ],
          "sections": [
            {
              "title": "Fundamentos Teóricos",
              "questions": [
                {
                  "id": 366,
                  "question": "¿Cuál es el mecanismo de acción de los benzimidazoles (tiabendazol, mebendazol, albendazol)?",
                  "options": [
                    "Bloqueo neuromuscular reversible con parálisis flácida",
                    "Unión selectiva a la beta-tubulina, inhibiendo la polimerización de microtúbulos",
                    "Aumento de la permeabilidad al calcio",
                    "Acción nicotínica despolarizante"
                  ],
                  "correct": 1,
                  "explanation": "Se unen selectivamente a la beta-tubulina, inhiben la polimerización de microtúbulos, alteran el transporte intracelular y la captación de glucosa, disminuyendo glucógeno/ATP hasta la muerte del parásito."
                },
                {
                  "id": 367,
                  "question": "El pamoato de pirantel produce su efecto antihelmíntico mediante:",
                  "options": [
                    "Inhibición de la síntesis de DNA",
                    "Acción nicotínica que causa parálisis espástica",
                    "Bloqueo de la captación de glucosa en el escólex",
                    "Hiperpolarización por canales de cloro"
                  ],
                  "correct": 1,
                  "explanation": "Ejerce acción nicotínica (agonista colinérgico despolarizante) generando parálisis espástica del gusano, favoreciendo su expulsión."
                },
                {
                  "id": 368,
                  "question": "La piperazina se diferencia del pirantel porque:",
                  "options": [
                    "También causa parálisis espástica",
                    "Produce bloqueo neuromuscular reversible con parálisis flácida",
                    "Actúa sobre canales de cloro sensibles a glutamato",
                    "Es hepatotóxica"
                  ],
                  "correct": 1,
                  "explanation": "La piperazina bloquea la transmisión neuromuscular de forma reversible, generando parálisis flácida (relajación), a diferencia del pirantel que produce parálisis espástica."
                },
                {
                  "id": 369,
                  "question": "El mecanismo de acción de la ivermectina consiste en:",
                  "options": [
                    "Inhibir la polimerización de tubulina",
                    "Bloquear la captación de glucosa",
                    "Potenciar y activar canales de cloro sensibles a glutamato, hiperpolarizando la célula",
                    "Aumentar la permeabilidad al calcio"
                  ],
                  "correct": 2,
                  "explanation": "Potencia y activa directamente los canales de cloro sensibles al glutamato, hiperpolarizando la membrana muscular del parásito y causando parálisis."
                },
                {
                  "id": 370,
                  "question": "La niclosamida actúa dañando irreversiblemente:",
                  "options": [
                    "La membrana de microfilarias",
                    "El escólex del céstodo, bloqueando la captación de glucosa",
                    "El DNA del parásito",
                    "Los canales de cloro del parásito"
                  ],
                  "correct": 1,
                  "explanation": "Bloquea la captación de glucosa dañando irreversiblemente el escólex del céstodo, lo que provoca su expulsión."
                },
                {
                  "id": 371,
                  "question": "El prazicuantel es de elección en esquistosomiasis y cisticercosis porque:",
                  "options": [
                    "Inhibe la síntesis de DNA",
                    "Aumenta la permeabilidad al calcio, provocando contracción y parálisis espástica",
                    "Bloquea receptores nicotínicos",
                    "Reduce la ferredoxina"
                  ],
                  "correct": 1,
                  "explanation": "Aumenta la permeabilidad de la membrana al calcio, generando contracción sostenida y parálisis espástica del helminto; es de amplio espectro contra céstodos y tremátodos."
                },
                {
                  "id": 372,
                  "question": "El metronidazol ejerce su efecto letal sobre el parásito principalmente al:",
                  "options": [
                    "Bloquear canales de cloro",
                    "Reducir su grupo nitro vía ferredoxina, generando productos que inhiben la síntesis de DNA",
                    "Inhibir la beta-tubulina",
                    "Aumentar la permeabilidad al calcio"
                  ],
                  "correct": 1,
                  "explanation": "La ferredoxina del parásito reduce el grupo nitro del metronidazol, generando metabolitos reactivos que inhiben la síntesis de DNA y destruyen su estructura helicoidal."
                },
                {
                  "id": 373,
                  "question": "El \"efecto antabuse\" asociado al metronidazol se debe a la inhibición de:",
                  "options": [
                    "La aldehído deshidrogenasa",
                    "La beta-tubulina",
                    "La ferredoxina",
                    "La acetilcolinesterasa"
                  ],
                  "correct": 0,
                  "explanation": "El metronidazol inhibe la aldehído deshidrogenasa, provocando acumulación de acetaldehído si se consume alcohol (efecto antabuse)."
                },
                {
                  "id": 374,
                  "question": "¿Cuál de las siguientes es una hidroxiquinolona amebicida luminal?",
                  "options": [
                    "Teclozan",
                    "Paromomicina",
                    "Yodoquinol",
                    "Etofamida"
                  ],
                  "correct": 2,
                  "explanation": "El yodoquinol es la hidroxiquinolona mencionada; teclozan y etofamida son dicloroacetamidas, y la paromomicina es un antimicrobiano usado como amebicida luminal."
                },
                {
                  "id": 375,
                  "question": "La nitazoxanida ejerce su efecto en protozoarios principalmente al:",
                  "options": [
                    "Inhibir la síntesis de DNA",
                    "Reducir la enzima PFOR (piruvato-ferredoxina oxidorreductasa) y la polimerización de tubulina",
                    "Bloquear canales de cloro",
                    "Aumentar la permeabilidad al calcio"
                  ],
                  "correct": 1,
                  "explanation": "Inhibe la polimerización de tubulina y, en protozoarios, reduce la PFOR, interfiriendo con el metabolismo energético anaeróbico del parásito."
                }
              ]
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 376,
                  "question": "Para un paciente con hidatidosis con compromiso tisular, el benzimidazol de elección es:",
                  "options": [
                    "Tiabendazol, por su mejor absorción",
                    "Mebendazol, por su bajo costo",
                    "Albendazol, porque se concentra en tejidos, incluso en quistes hidatídicos",
                    "Cualquiera, ya que todos tienen igual distribución tisular"
                  ],
                  "correct": 2,
                  "explanation": "El albendazol se concentra en tejidos, incluso dentro de quistes hidatídicos, a diferencia de los otros benzimidazoles con acción predominantemente intestinal."
                },
                {
                  "id": 377,
                  "question": "Combinar pamoato de pirantel con piperazina en el mismo esquema sería inadecuado porque:",
                  "options": [
                    "Ambos son hepatotóxicos",
                    "Sus mecanismos son antagónicos: uno causa parálisis espástica y el otro flácida",
                    "Ambos requieren metabolismo renal",
                    "Ninguno actúa sobre Ascaris"
                  ],
                  "correct": 1,
                  "explanation": "El pirantel (agonista nicotínico, parálisis espástica) y la piperazina (bloqueador neuromuscular, parálisis flácida) tienen efectos farmacológicamente opuestos, por lo que podrían anular su eficacia mutua."
                },
                {
                  "id": 378,
                  "question": "La baja absorción oral (~15%) del pamoato de pirantel explica su eficacia contra helmintos intestinales porque:",
                  "options": [
                    "Permite alcanzar altas concentraciones sistémicas",
                    "Mantiene altas concentraciones del fármaco en la luz intestinal, donde están los parásitos",
                    "Evita el metabolismo hepático por completo",
                    "Aumenta su unión a proteínas plasmáticas"
                  ],
                  "correct": 1,
                  "explanation": "Al absorberse poco, la mayor parte del fármaco permanece en la luz intestinal, maximizando el efecto local sobre Ascaris, oxiuros y uncinarias."
                },
                {
                  "id": 379,
                  "question": "Un paciente con oncocercosis tratado con ivermectina presenta fiebre, prurito intenso y malestar tras la dosis. Este cuadro corresponde a:",
                  "options": [
                    "Toxicidad hepática directa",
                    "Reacción de Mazzotti, por muerte masiva de microfilarias",
                    "Efecto antabuse",
                    "Bloqueo neuromuscular excesivo"
                  ],
                  "correct": 1,
                  "explanation": "Es la reacción de Mazzotti, una reacción inmunitaria desencadenada por la liberación de antígenos tras la muerte de microfilarias."
                },
                {
                  "id": 380,
                  "question": "Para un paciente con neurocisticercosis por T. solium (a diferencia de una teniasis intestinal simple), la mejor elección terapéutica sería:",
                  "options": [
                    "Niclosamida, porque actúa en el escólex",
                    "Piperazina, porque produce parálisis flácida",
                    "Albendazol, por su buena penetración tisular hacia el sistema nervioso central",
                    "Pamoato de pirantel, por su bajo costo"
                  ],
                  "correct": 2,
                  "explanation": "Albendazol penetra tejidos, incluyendo el SNC, siendo útil en neurocisticercosis; la niclosamida no se absorbe y sólo sirve para teniasis intestinal."
                },
                {
                  "id": 381,
                  "question": "El prazicuantel y la dietilcarbamazina NO son intercambiables porque:",
                  "options": [
                    "Ambos actúan solo sobre nemátodos",
                    "El prazicuantel trata céstodos/tremátodos y la dietilcarbamazina es específica para filarias",
                    "Ambos tienen el mismo mecanismo de acción",
                    "La dietilcarbamazina es hepatotóxica y el prazicuantel no"
                  ],
                  "correct": 1,
                  "explanation": "El prazicuantel actúa sobre céstodos y tremátodos (aumento de calcio intracelular), mientras que la dietilcarbamazina es específica para filarias, con un mecanismo distinto."
                },
                {
                  "id": 382,
                  "question": "En amebiasis intestinal invasiva tratada con metronidazol, se agrega yodoquinol porque:",
                  "options": [
                    "El metronidazol no tiene efecto tisular",
                    "El yodoquinol potencia la absorción del metronidazol",
                    "El metronidazol tiene poco efecto sobre amebas en la luz intestinal, y el yodoquinol (no absorbible) las erradica, previniendo recaídas",
                    "Ambos deben combinarse siempre por ley"
                  ],
                  "correct": 2,
                  "explanation": "El metronidazol actúa principalmente a nivel tisular; el yodoquinol, al no absorberse, elimina las amebas/quistes residuales en la luz intestinal, evitando el estado de portador."
                },
                {
                  "id": 383,
                  "question": "El efecto adverso más esperado tras tratamiento prolongado con albendazol para hidatidosis es:",
                  "options": [
                    "Nefrotoxicidad",
                    "Hepatotoxicidad",
                    "Ototoxicidad",
                    "Cardiotoxicidad"
                  ],
                  "correct": 1,
                  "explanation": "El albendazol tiene potencial hepatotóxico descrito, especialmente entre los benzimidazoles, además de cefalea, fiebre y fatiga."
                },
                {
                  "id": 384,
                  "question": "En comparación con el metronidazol, la ventaja farmacocinética del tinidazol es:",
                  "options": [
                    "Menor biodisponibilidad",
                    "Vida media prolongada, permitiendo esquemas más simples",
                    "Ausencia de metabolismo hepático",
                    "Mayor toxicidad neurológica"
                  ],
                  "correct": 1,
                  "explanation": "El tinidazol tiene una vida media prolongada respecto al metronidazol, lo que permite dosis únicas o esquemas más simples, mejorando la adherencia."
                },
                {
                  "id": 385,
                  "question": "Un paciente con amebiasis y giardiasis concomitantes podría beneficiarse de un tratamiento único con:",
                  "options": [
                    "Niclosamida",
                    "Nitazoxanida, por su amplio espectro que cubre ambas entidades",
                    "Piperazina",
                    "Dietilcarbamazina"
                  ],
                  "correct": 1,
                  "explanation": "La nitazoxanida tiene indicación tanto en disentería amebiana como en giardiasis (y helmintiasis), permitiendo cubrir ambas infecciones con un solo fármaco."
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 386,
                  "question": "Una gestante de 10 semanas con ascariasis sintomática. La conducta más prudente respecto a mebendazol/albendazol es:",
                  "options": [
                    "Administrarlos sin restricción, ya que son seguros en el embarazo",
                    "Evitarlos por su potencial teratogénico, especialmente en el primer trimestre",
                    "Duplicar la dosis para asegurar eficacia",
                    "Combinarlos con piperazina"
                  ],
                  "correct": 1,
                  "explanation": "Mebendazol y albendazol tienen potencial teratogénico y deben evitarse, sobre todo en el primer trimestre, valorando riesgo-beneficio o alternativas más seguras."
                },
                {
                  "id": 387,
                  "question": "Un paciente con oxiuriasis recibe piperazina en dosis única, pero no se trata a los convivientes. El resultado más probable es:",
                  "options": [
                    "Curación definitiva sin riesgo de recontagio",
                    "Reinfección rápida por transmisión fecal-oral entre convivientes",
                    "Resistencia inmediata al fármaco",
                    "Ausencia de riesgo, ya que la piperazina tiene efecto profiláctico prolongado"
                  ],
                  "correct": 1,
                  "explanation": "La enterobiasis se transmite fácilmente entre convivientes por autoinfección y contacto fecal-oral; sin tratar a todo el núcleo familiar, la reinfección es muy probable."
                },
                {
                  "id": 388,
                  "question": "Un niño de una zona de alto riesgo (>50% prevalencia de geohelmintos, ej. Chocó) con anemia y retraso de crecimiento. Según la estrategia poblacional descrita, se recomienda:",
                  "options": [
                    "No realizar desparasitación masiva",
                    "Desparasitación masiva una vez al año",
                    "Desparasitación masiva dos veces al año",
                    "Tratamiento individual solo si hay síntomas"
                  ],
                  "correct": 2,
                  "explanation": "En zonas de alto riesgo (>50%) se recomienda desparasitación masiva 2 veces al año, dada la alta prevalencia y el impacto en anemia y desarrollo infantil."
                },
                {
                  "id": 389,
                  "question": "Un paciente con quiste hidatídico hepático e insuficiencia hepática moderada requiere albendazol. La conducta más adecuada es:",
                  "options": [
                    "Usarlo sin ninguna precaución adicional",
                    "Contraindicarlo absolutamente sin alternativa",
                    "Usarlo con monitorización estrecha de la función hepática, dado su riesgo hepatotóxico y metabolismo hepático",
                    "Reemplazarlo automáticamente por niclosamida"
                  ],
                  "correct": 2,
                  "explanation": "Dado que el albendazol es hepatotóxico y de metabolismo hepático, en un paciente con insuficiencia hepática se requiere vigilancia estrecha de enzimas hepáticas y posible ajuste terapéutico."
                },
                {
                  "id": 390,
                  "question": "Un paciente en tratamiento con metronidazol consume alcohol. Lo esperable es:",
                  "options": [
                    "Ningún efecto, son compatibles",
                    "Un efecto tipo \"antabuse\": rubor, taquicardia, náuseas y malestar por acumulación de acetaldehído",
                    "Potenciación del efecto antiparasitario",
                    "Reducción de la vida media del fármaco"
                  ],
                  "correct": 1,
                  "explanation": "Al inhibir la aldehído deshidrogenasa, el metronidazol provoca acumulación de acetaldehído si se ingiere alcohol, generando el efecto antabuse."
                },
                {
                  "id": 391,
                  "question": "Un paciente tratado con ivermectina para oncocercosis presenta somnolencia leve y cambios electrográficos transitorios, además de la reacción de Mazzotti. La conducta más razonable es:",
                  "options": [
                    "Suspender inmediatamente el fármaco de forma definitiva",
                    "Vigilar la evolución, dado que son efectos colaterales descritos y usualmente transitorios, sin suspender de entrada",
                    "Duplicar la dosis para acelerar la resolución",
                    "Iniciar antibioticoterapia empírica"
                  ],
                  "correct": 1,
                  "explanation": "Estos efectos están descritos como colaterales conocidos de la ivermectina; si son leves y transitorios no ameritan suspensión inmediata, pero sí vigilancia clínica."
                },
                {
                  "id": 392,
                  "question": "Un paciente con giardiasis tiene alergia documentada a nitroimidazoles. La alternativa terapéutica planteada en el material es:",
                  "options": [
                    "Tinidazol, porque no es un nitroimidazol",
                    "Furazolidona, al no pertenecer a los nitroimidazoles",
                    "Niclosamida",
                    "Prazicuantel"
                  ],
                  "correct": 1,
                  "explanation": "La furazolidona se menciona como alternativa para giardiasis, siendo razonable en un paciente alérgico a nitroimidazoles (el tinidazol sí es un nitroimidazol, como el metronidazol)."
                },
                {
                  "id": 393,
                  "question": "Una mujer con tricomoniasis vaginal tiene pareja estable asintomática. La conducta correcta es:",
                  "options": [
                    "Tratar solo a la mujer, ya que la pareja está asintomática",
                    "Tratar a ambos, ya que la pareja asintomática puede ser reservorio y causar reinfección",
                    "No tratar a ninguno hasta confirmar síntomas en la pareja",
                    "Tratar solo a la pareja"
                  ],
                  "correct": 1,
                  "explanation": "Al ser una infección de transmisión sexual, se debe tratar a la pareja aunque esté asintomática, para evitar reinfección de la paciente."
                },
                {
                  "id": 394,
                  "question": "Usar niclosamida para tratar una neurocisticercosis sería inadecuado porque:",
                  "options": [
                    "Es demasiado costosa",
                    "Actúa localmente en el escólex intestinal y no alcanza tejido nervioso, donde están los cisticercos",
                    "Solo actúa sobre nemátodos, no céstodos",
                    "Requiere metabolismo renal exclusivo"
                  ],
                  "correct": 1,
                  "explanation": "La niclosamida actúa en la luz intestinal dañando el escólex, sin penetración sistémica relevante; los cisticercos en SNC requieren fármacos con buena penetración tisular como albendazol o prazicuantel."
                },
                {
                  "id": 395,
                  "question": "Un paciente con VIH avanzado presenta infección mixta por E. histolytica y Giardia lamblia, con sospecha de helmintiasis concomitante. La estrategia terapéutica más eficiente sería:",
                  "options": [
                    "Solo niclosamida, ya que cubre todos los parásitos",
                    "Solo piperazina, por su bajo costo",
                    "Metronidazol/tinidazol más un amebicida luminal, considerando nitazoxanida como alternativa de amplio espectro que cubre amebiasis, giardiasis y helmintiasis",
                    "Ivermectina en monoterapia para todas las infecciones"
                  ],
                  "correct": 2,
                  "explanation": "El nitroimidazol cubre amebiasis y giardiasis, complementado con un amebicida luminal para evitar el estado de portador; la nitazoxanida es una alternativa de amplio espectro que simplifica el esquema en un paciente con adherencia comprometida."
                }
              ]
            }
          ]
        },
        {
          "id": "antimicoticos",
          "title": "Farmacología de Antimicóticos",
          "description": "Analiza los mecanismos de acción, resistencia y aplicación clínica de los principales grupos de fármacos antifúngicos.",
          "topics": [
            "Polienos (anfotericina B, nistatina): unión al ergosterol",
            "Azoles: inhibición de la 14-α-demetilasa",
            "Equinocandinas: inhibición de la beta-1,3-glucano sintetasa",
            "Resistencia antifúngica intrínseca vs. adquirida y selección terapéutica"
          ],
          "sections": [
            {
              "title": "Fundamentos Teóricos",
              "questions": [
                {
                  "id": 396,
                  "question": "¿Cuál es el mecanismo de acción de los polienos (anfotericina B, nistatina)?",
                  "options": [
                    "Inhiben la enzima 14-α-demetilasa",
                    "Se unen al ergosterol de la membrana fúngica formando poros que alteran su permeabilidad",
                    "Inhiben la beta-1,3-glucano sintetasa",
                    "Inhiben la timidilato sintetasa"
                  ],
                  "correct": 1,
                  "explanation": "Los polienos se unen al ergosterol de la membrana citoplasmática fúngica, formando un complejo poliénico-ergosterol que genera poros, produciendo fuga de iones y desestabilización de la membrana."
                },
                {
                  "id": 397,
                  "question": "El mecanismo de acción de los azoles consiste en:",
                  "options": [
                    "Inhibir la síntesis de quitina",
                    "Inhibir la enzima 14-α-demetilasa dependiente del citocromo P450, bloqueando la conversión de lanosterol a ergosterol",
                    "Formar poros en la membrana uniéndose al ergosterol",
                    "Inhibir la polimerización de microtúbulos"
                  ],
                  "correct": 1,
                  "explanation": "Los azoles inhiben la 14-α-demetilasa (enzima del citocromo P450), impidiendo la conversión de lanosterol a ergosterol, con acumulación de esteroles tóxicos intermedios y muerte celular."
                },
                {
                  "id": 398,
                  "question": "Las equinocandinas (caspofungina) actúan mediante:",
                  "options": [
                    "Inhibición de la beta-1,3-glucano sintetasa, reduciendo la síntesis de glucanos de la pared celular",
                    "Inhibición de la síntesis de ergosterol",
                    "Unión directa al ADN fúngico",
                    "Bloqueo de los canales de cloro"
                  ],
                  "correct": 0,
                  "explanation": "Inhiben la enzima beta-1,3-glucano sintetasa, generando depleción de beta-1,3-glucano en la pared celular, pérdida de rigidez, inestabilidad osmótica y muerte del hongo."
                },
                {
                  "id": 399,
                  "question": "La terbinafina (alilamina) ejerce su efecto antifúngico al:",
                  "options": [
                    "Inhibir la escualeno 2,3-epoxidasa, bloqueando la conversión de escualeno a lanosterol",
                    "Inhibir la 14-α-demetilasa",
                    "Unirse al ergosterol de membrana",
                    "Inhibir la beta-1,3-glucano sintetasa"
                  ],
                  "correct": 0,
                  "explanation": "Inhibe la escualeno epoxidasa, impidiendo la formación de escualeno-2,3-epóxido, lo que reduce la producción de ergosterol y provoca acumulación de escualeno, generando estrés de membrana."
                },
                {
                  "id": 400,
                  "question": "¿Cuál es el mecanismo de acción de la flucitosina (5-FC)?",
                  "options": [
                    "Se convierte por citosina desaminasa fúngica en 5-fluorouracilo, que inhibe la timidilato sintetasa y se incorpora al RNA, inhibiendo la síntesis de DNA y proteínas",
                    "Inhibe la 14-α-demetilasa",
                    "Forma poros en la membrana celular",
                    "Inhibe la síntesis de quitina"
                  ],
                  "correct": 0,
                  "explanation": "La flucitosina ingresa por una permeasa de citosina (ausente en células humanas), se transforma en 5-fluorouracilo por la citosina desaminasa fúngica, y este metabolito inhibe la timidilato sintetasa (bloqueando el DNA) y se incorpora al RNA fúngico (bloqueando la síntesis proteica)."
                },
                {
                  "id": 401,
                  "question": "Según la clasificación presentada, ¿cuál de los siguientes es un antimicótico tópico?",
                  "options": [
                    "Caspofungina",
                    "Voriconazol",
                    "Terbinafina (alilamina)",
                    "Anfotericina B liposomal"
                  ],
                  "correct": 2,
                  "explanation": "Las alilaminas (terbinafina, naftifina), la nistatina y los azoles tópicos (clotrimazol, econazol, miconazol) se clasifican como antimicóticos tópicos, mientras que anfotericina B, azoles sistémicos, antimetabolitos y equinocandinas son sistémicos."
                },
                {
                  "id": 402,
                  "question": "¿Qué diferencia principal existe entre los imidazoles y los triazoles según su estructura?",
                  "options": [
                    "Los imidazoles tienen 3 nitrógenos y los triazoles 2",
                    "Los imidazoles tienen 2 nitrógenos (uso principalmente tópico) y los triazoles tienen 3 nitrógenos (diseñados para uso sistémico, más estables)",
                    "No existe diferencia estructural entre ellos",
                    "Los triazoles solo se usan en infecciones cutáneas"
                  ],
                  "correct": 1,
                  "explanation": "Los imidazoles (2 nitrógenos: ketoconazol, miconazol, clotrimazol) se usan principalmente en infecciones superficiales por su mayor toxicidad sistémica; los triazoles (3 nitrógenos: fluconazol, itraconazol, voriconazol, posaconazol) son más estables, se metabolizan más lento y se diseñaron para uso sistémico."
                },
                {
                  "id": 403,
                  "question": "¿Cuáles son los principales efectos adversos descritos para la anfotericina B convencional?",
                  "options": [
                    "Solo hepatotoxicidad",
                    "Reacciones relacionadas con la infusión (fiebre, escalofríos, tromboflebitis), nefrotoxicidad (hipocalemia, hipomagnesemia, aumento de creatinina/urea) y anemia normocítica normocrómica",
                    "Únicamente reacciones alérgicas cutáneas",
                    "Solo toxicidad ósea por fluoruro"
                  ],
                  "correct": 1,
                  "explanation": "La anfotericina B produce reacciones por infusión (fiebre, escalofríos, tromboflebitis, necrosis tisular), nefrotoxicidad con alteraciones electrolíticas (hipocalemia, hipomagnesemia) y elevación de creatinina/urea, además de anemia normocítica normocrómica."
                },
                {
                  "id": 404,
                  "question": "Respecto a la caspofungina, ¿cuál de las siguientes afirmaciones es correcta según su espectro de actividad?",
                  "options": [
                    "Tiene excelente actividad frente a Cryptococcus",
                    "No tiene actividad frente a Criptococo, pero cubre Candida spp (incluida glabrata y krusei), Aspergillus spp y hongos filamentosos",
                    "Solo actúa sobre dermatofitos",
                    "Es inactiva frente a Candida"
                  ],
                  "correct": 1,
                  "explanation": "La caspofungina cubre Candida spp (incluso las especies con menor sensibilidad a azoles como glabrata y krusei), Aspergillus spp, hongos filamentosos, Blastomyces, Histoplasma y Coccidioides, pero NO tiene actividad frente a Cryptococcus."
                },
                {
                  "id": 405,
                  "question": "¿Cuál es la diferencia entre resistencia intrínseca (natural) y resistencia secundaria (adquirida) en hongos?",
                  "options": [
                    "Son sinónimos",
                    "En la intrínseca ningún miembro de la especie es sensible al fármaco desde el inicio (ej. Candida krusei y fluconazol); en la secundaria, una cepa previamente sensible adquiere resistencia después del tratamiento con el antifúngico",
                    "La secundaria ocurre sin exposición previa al fármaco",
                    "La intrínseca solo se observa en Aspergillus"
                  ],
                  "correct": 1,
                  "explanation": "La resistencia intrínseca es una insensibilidad natural de toda la especie (ningún miembro es sensible, ej. C. krusei frente a fluconazol) sin exposición previa; la resistencia secundaria o adquirida ocurre cuando una cepa antes sensible se vuelve resistente tras el tratamiento con el antifúngico."
                }
              ]
            },
            {
              "title": "Aplicación: Interpretación y Comparación",
              "questions": [
                {
                  "id": 406,
                  "question": "Un paciente con candidemia presenta intolerancia a la anfotericina B convencional. La alternativa más razonable según el material sería:",
                  "options": [
                    "Suspender todo tratamiento antifúngico",
                    "Usar una formulación lipídica de anfotericina B (ABLC, ABCD o liposomal), ya que ofrecen eficacia similar con menor nefrotoxicidad",
                    "Duplicar la dosis de anfotericina B convencional",
                    "Usar terbinafina sistémica"
                  ],
                  "correct": 1,
                  "explanation": "Las formulaciones lipídicas de anfotericina B tienen eficacia similar a la convencional pero con menor nefrotoxicidad, y están indicadas precisamente en pacientes con intolerancia al tratamiento convencional o falla renal preexistente (aunque de alto costo)."
                },
                {
                  "id": 407,
                  "question": "¿Por qué la combinación de azoles con anfotericina B se considera potencialmente antagónica?",
                  "options": [
                    "Porque ambos tienen el mismo mecanismo de acción",
                    "Porque los azoles inhiben la síntesis de ergosterol, reduciendo el sustrato de membrana al que la anfotericina B necesita unirse para ejercer su efecto",
                    "Porque los azoles inactivan directamente a la anfotericina B en plasma",
                    "Porque ambos requieren metabolismo renal exclusivo"
                  ],
                  "correct": 1,
                  "explanation": "Los azoles bloquean la síntesis de ergosterol; como la anfotericina B necesita unirse al ergosterol de la membrana para formar poros, al haber menos ergosterol disponible, el efecto de la anfotericina B se ve disminuido (antagonismo farmacológico)."
                },
                {
                  "id": 408,
                  "question": "Comparando el mecanismo de la flucitosina con el de la anfotericina B, explique por qué su combinación es sinérgica.",
                  "options": [
                    "Ambas actúan sobre el mismo blanco molecular",
                    "La anfotericina B aumenta la permeabilidad de la membrana fúngica, facilitando la entrada de flucitosina a la célula, mientras esta ejerce su efecto sobre la síntesis de DNA/RNA en el núcleo",
                    "La flucitosina inhibe a la anfotericina B",
                    "No existe sinergismo descrito entre ambas"
                  ],
                  "correct": 1,
                  "explanation": "La anfotericina B daña la membrana celular fúngica aumentando su permeabilidad, lo que permite que más flucitosina penetre a la célula y ejerza su efecto inhibitorio sobre la síntesis de ácidos nucleicos, siendo ambos mecanismos complementarios (sinergia parcial descrita especialmente en Cryptococcus)."
                },
                {
                  "id": 409,
                  "question": "Un paciente en tratamiento con voriconazol recibe simultáneamente un alcaloide de la vinca (ej. vincristina) para quimioterapia. ¿Qué riesgo se anticipa según las interacciones descritas?",
                  "options": [
                    "Ausencia de interacción relevante",
                    "Aumento de la exposición al alcaloide de la vinca, con riesgo de neurotoxicidad, debido a la inhibición del citocromo P450 por el azol",
                    "Disminución del efecto del voriconazol",
                    "Reducción del riesgo de toxicidad del alcaloide"
                  ],
                  "correct": 1,
                  "explanation": "El voriconazol, al inhibir enzimas del citocromo P450, aumenta la exposición a alcaloides de la vinca (vincristina, vinblastina), incrementando el riesgo de neurotoxicidad, tal como se describe en la tabla de interacciones."
                },
                {
                  "id": 410,
                  "question": "Para un paciente con esofagitis candidiásica refractaria a fluconazol, ¿qué fármaco sería razonable considerar según las indicaciones descritas?",
                  "options": [
                    "Nistatina tópica",
                    "Caspofungina, indicada precisamente en esofagitis candidiásica refractaria a fluconazol",
                    "Griseofulvina",
                    "Piperazina"
                  ],
                  "correct": 1,
                  "explanation": "La caspofungina está indicada en esofagitis candidiásica refractaria a fluconazol, además de infecciones por Aspergillus refractarias a anfotericina B y candidemia en pacientes no neutropénicos."
                },
                {
                  "id": 411,
                  "question": "Un paciente con onicomicosis recibe terbinafina oral y, durante exposición solar en vacaciones, desarrolla un exantema pruriginoso en zonas fotoexpuestas con fiebre. Con base en el caso descrito en el material, esto correspondería a:",
                  "options": [
                    "Una reacción alérgica alimentaria no relacionada con el fármaco",
                    "Una fotodermatosis/fotosensibilización inducida por terbinafina, que mejora al suspender el fármaco",
                    "Un efecto esperado y sin relevancia clínica que no requiere ninguna conducta",
                    "Toxicidad renal por terbinafina"
                  ],
                  "correct": 1,
                  "explanation": "El caso reportado describe una fotodermatosis inducida por terbinafina en una mujer tratada por onicomicosis, con erupción en zonas fotoexpuestas, fiebre y malestar, que mejoró al suspender el fármaco y usar fotoprotección/corticoide tópico."
                },
                {
                  "id": 412,
                  "question": "Ante una cepa de Candida krusei aislada en un paciente, ¿qué antifúngico evitaría de entrada según el concepto de resistencia intrínseca?",
                  "options": [
                    "Anfotericina B",
                    "Fluconazol, ya que C. krusei presenta resistencia intrínseca a este azol",
                    "Caspofungina",
                    "Nistatina tópica"
                  ],
                  "correct": 1,
                  "explanation": "Candida krusei es un ejemplo clásico de resistencia intrínseca (natural) al fluconazol, mencionado explícitamente en el material, por lo que este fármaco no sería una opción adecuada de entrada."
                },
                {
                  "id": 413,
                  "question": "Comparando el espectro de nistatina y anfotericina B según el material, ¿qué tienen en común ambos polienos?",
                  "options": [
                    "Ambos requieren metabolismo hepático exclusivo",
                    "Ambos son fungistáticos/fungicidas activos frente a levaduras (Candida, C. neoformans) y hongos dimórficos, actuando sobre la membrana fúngica",
                    "Ambos se usan exclusivamente por vía intravenosa",
                    "Ninguno actúa sobre Aspergillus"
                  ],
                  "correct": 1,
                  "explanation": "Ambos son polienos con mecanismo de acción similar (unión a ergosterol) y espectro que incluye levaduras (Candida sp, C. neoformans) y hongos dimórficos (H. capsulatum, B. dermatitidis); la nistatina se destaca por su uso tópico y la anfotericina B por su uso sistémico."
                },
                {
                  "id": 414,
                  "question": "Un paciente con insuficiencia renal preexistente requiere tratamiento antifúngico sistémico prolongado para una micosis invasiva grave. ¿Qué opción sería más prudente según las propiedades descritas?",
                  "options": [
                    "Anfotericina B deoxicolato convencional en altas dosis",
                    "Una formulación lipídica de anfotericina B, dado que tiene menor nefrotoxicidad que la convencional",
                    "Suspender cualquier antifúngico",
                    "Aumentar la dosis de flucitosina sin ajuste"
                  ],
                  "correct": 1,
                  "explanation": "Las formulaciones lipídicas de anfotericina B están indicadas específicamente en pacientes con falla renal preexistente o intolerancia a la anfotericina B convencional, por su menor nefrotoxicidad, aunque con mayor costo."
                },
                {
                  "id": 415,
                  "question": "Si se sospecha una cepa fúngica con sobreexpresión de bombas de eflujo tipo MDR (major facilitators) frente a fluconazol, ¿qué se esperaría clínicamente?",
                  "options": [
                    "Mayor sensibilidad al fluconazol",
                    "Resistencia al fluconazol, ya que estas bombas expulsan activamente el fármaco fuera de la célula fúngica, impidiendo que alcance concentraciones intracelulares eficaces",
                    "Ausencia de cualquier efecto sobre la eficacia del fármaco",
                    "Aumento de la síntesis de ergosterol como único mecanismo"
                  ],
                  "correct": 1,
                  "explanation": "La sobreexpresión de bombas de eflujo (CDRs tipo ABC o MDR tipo Major Facilitators) es un mecanismo molecular de resistencia que expulsa activamente los azoles de la célula fúngica, disminuyendo su concentración intracelular y produciendo resistencia clínica al fluconazol."
                }
              ]
            },
            {
              "title": "Análisis Clínico: Casos e Integración",
              "questions": [
                {
                  "id": 416,
                  "question": "Un paciente neutropénico febril con sospecha de infección fúngica invasiva por hongos filamentosos requiere tratamiento empírico de amplio espectro. Según las indicaciones descritas, ¿qué fármaco sería razonable de primera línea?",
                  "options": [
                    "Nistatina tópica",
                    "Anfotericina B, indicada precisamente en neutropenia febril e infecciones por zygomicetos y hongos filamentosos",
                    "Griseofulvina oral",
                    "Clotrimazol tópico"
                  ],
                  "correct": 1,
                  "explanation": "La anfotericina B está indicada en neutropenia febril, así como en infecciones por zygomicetos y hongos filamentosos, siendo una opción empírica de amplio espectro en este escenario."
                },
                {
                  "id": 417,
                  "question": "Un paciente trasplantado de pulmón requiere profilaxis contra infecciones micóticas. ¿Qué estrategia se menciona específicamente en el material para este contexto?",
                  "options": [
                    "Caspofungina intravenosa diaria de por vida",
                    "Anfotericina B en aerosol como profilaxis de infecciones micóticas en trasplantados de pulmón",
                    "Griseofulvina oral",
                    "Ninguna profilaxis está indicada en trasplantados"
                  ],
                  "correct": 1,
                  "explanation": "El material menciona explícitamente la profilaxis de infecciones micóticas en trasplantados de pulmón mediante anfotericina B administrada en aerosol."
                },
                {
                  "id": 418,
                  "question": "Un paciente con meningitis criptocócica en tratamiento con anfotericina B y flucitosina desarrolla leucopenia y trombocitopenia progresivas. ¿A qué fármaco de los dos atribuiría este efecto y por qué?",
                  "options": [
                    "A la anfotericina B, por su mecanismo de formación de poros",
                    "A la flucitosina, ya que su toxicidad característica es la depresión de la función medular (leucopenia, anemia, trombocitopenia)",
                    "A ambos por igual, sin diferencia en el mecanismo",
                    "No es un efecto adverso descrito para ninguno de los dos"
                  ],
                  "correct": 1,
                  "explanation": "La depresión de la función medular (leucopenia, anemia, trombocitopenia) es un efecto adverso característico de la flucitosina, a diferencia de la anfotericina B cuyos efectos típicos son relacionados con la infusión, nefrotoxicidad y anemia normocítica normocrómica."
                },
                {
                  "id": 419,
                  "question": "Una mujer embarazada requiere tratamiento antifúngico sistémico prolongado. Según las propiedades descritas de la flucitosina, ¿qué precaución debería tenerse?",
                  "options": [
                    "Ninguna, es segura en el embarazo",
                    "Debe evitarse o usarse con extrema precaución, ya que la flucitosina tiene potencial teratogénico descrito",
                    "Se recomienda como primera línea en el embarazo",
                    "Solo se debe evitar en el tercer trimestre"
                  ],
                  "correct": 1,
                  "explanation": "La flucitosina tiene teratogenicidad descrita entre sus efectos adversos/tóxicos, por lo que debe evitarse o usarse con extrema cautela en el embarazo, valorando riesgo-beneficio."
                },
                {
                  "id": 420,
                  "question": "Un paciente con aspergilosis invasiva refractaria a anfotericina B, con toxicidad renal significativa por este fármaco, requiere un cambio de tratamiento. ¿Cuál sería la opción más adecuada según las indicaciones descritas?",
                  "options": [
                    "Aumentar la dosis de anfotericina B a pesar de la toxicidad",
                    "Caspofungina, indicada específicamente en infecciones por Aspergillus refractarias a anfotericina B o con toxicidad grave por esta droga",
                    "Nistatina oral",
                    "Griseofulvina sistémica"
                  ],
                  "correct": 1,
                  "explanation": "La caspofungina está indicada precisamente en infecciones por Aspergillus en pacientes refractarios al tratamiento con anfotericina B o que presentan toxicidad grave por esta droga."
                },
                {
                  "id": 421,
                  "question": "Un paciente con candidiasis diseminada por Candida lusitaniae no responde clínicamente a pesar de niveles adecuados de anfotericina B. Según la tabla de susceptibilidad presentada, ¿cómo interpretaría este hallazgo?",
                  "options": [
                    "Es un error de laboratorio, ya que todas las Candida son sensibles a anfotericina B",
                    "Candida lusitaniae está descrita como especie con resistencia a la anfotericina B, lo cual explicaría la falla terapéutica",
                    "Se debe simplemente duplicar la dosis sin cambiar de fármaco",
                    "Se debe usar dosis subterapéuticas para evitar toxicidad"
                  ],
                  "correct": 1,
                  "explanation": "Según la tabla de susceptibilidad presentada, Candida lusitaniae se encuentra en la categoría de resistencia a la anfotericina B, lo que podría explicar la falta de respuesta clínica y orientaría a considerar un cambio terapéutico (p. ej., un azol o equinocandina, según sensibilidad)."
                },
                {
                  "id": 422,
                  "question": "Un paciente crítico en tratamiento prolongado con voriconazol presenta dolor óseo progresivo sin causa traumática aparente. ¿Qué relación se establece en el material entre este síntoma y los azoles sistémicos?",
                  "options": [
                    "No existe ninguna relación descrita",
                    "El dolor óseo se asocia a la acumulación de fluoruro derivada del uso prolongado de azoles sistémicos como voriconazol",
                    "Se debe exclusivamente a la anfotericina B",
                    "Es un efecto exclusivo de la caspofungina"
                  ],
                  "correct": 1,
                  "explanation": "El material describe el dolor óseo por fluoruro como un efecto adverso de los antifúngicos azólicos sistémicos, incluido el voriconazol, relacionado con la acumulación de fluoruro por uso prolongado."
                },
                {
                  "id": 423,
                  "question": "En un paciente con candidiasis invasiva causada por una cepa con mecanismo de resistencia por \"modificación del blanco de acción\" (sobreproducción de la enzima blanco Erg11), ¿qué implicación terapéutica tendría esto para el uso de azoles?",
                  "options": [
                    "Ninguna, los azoles seguirían siendo igual de eficaces",
                    "La sobreproducción de la enzima diana (14-α-demetilasa/Erg11) puede requerir concentraciones más altas de azol para lograr una inhibición eficaz, favoreciendo la resistencia clínica",
                    "Este mecanismo solo afecta a las equinocandinas",
                    "Aumentaría automáticamente la sensibilidad a la anfotericina B"
                  ],
                  "correct": 1,
                  "explanation": "La sobreproducción de la enzima blanco (Erg11/14-α-demetilasa) es uno de los mecanismos moleculares de resistencia a azoles descritos; al haber más enzima disponible, se requiere mayor cantidad de fármaco para inhibirla eficazmente, lo cual favorece el fracaso terapéutico clínico con las dosis habituales."
                },
                {
                  "id": 424,
                  "question": "Un paciente con candidemia no neutropénica presenta comorbilidad hepática significativa. Al comparar caspofungina con anfotericina B para este caso, ¿qué aspecto farmacocinético de la caspofungina debe considerarse?",
                  "options": [
                    "Se elimina exclusivamente por vía renal sin metabolismo hepático",
                    "Su metabolismo es hepático por hidrólisis y acetilación, por lo que en insuficiencia hepática significativa podría requerir ajuste, aunque en general se describe como de menor toxicidad que la anfotericina B en pacientes no neutropénicos",
                    "No tiene ningún metabolismo, se elimina inalterada",
                    "Se elimina completamente por hemodiálisis"
                  ],
                  "correct": 1,
                  "explanation": "La caspofungina tiene metabolismo hepático por hidrólisis y acetilación (con metabolitos inactivos) y no se elimina por hemodiálisis; en un paciente con comorbilidad hepática esto debe considerarse, aunque en candidemia de pacientes no neutropénicos se describe como de mayor eficacia y menor toxicidad global que la anfotericina B."
                },
                {
                  "id": 425,
                  "question": "Escenario integrador: un paciente con VIH avanzado desarrolla meningitis criptocócica. Se plantea manejo inicial con anfotericina B más flucitosina, seguido de mantenimiento. ¿Por qué esta combinación (y no monoterapia) es razonable según los conceptos de sinergismo y espectro descritos, y qué fármaco NO sería una opción para el mantenimiento por su falta de actividad frente a Cryptococcus?",
                  "options": [
                    "La combinación no aporta ninguna ventaja; cualquier antifúngico serviría igual, incluida la caspofungina para el mantenimiento",
                    "La combinación anfotericina B + flucitosina es sinérgica (la anfotericina B permeabiliza la membrana facilitando la entrada de flucitosina), lo cual es especialmente relevante en Cryptococcus; la caspofungina NO sería útil para el mantenimiento porque no tiene actividad frente a Cryptococcus",
                    "La flucitosina sola sería suficiente y más segura que la combinación",
                    "La caspofungina sería el fármaco ideal de mantenimiento por su bajo perfil de efectos adversos"
                  ],
                  "correct": 1,
                  "explanation": "El material describe sinergia parcial entre anfotericina B y flucitosina especialmente en Cryptococcus, por el mecanismo de permeabilización de membrana que facilita la acción intracelular de la flucitosina. Para el mantenimiento se usan típicamente azoles (ej. fluconazol), pero la caspofungina está explícitamente señalada como sin actividad frente a Criptococo, por lo que no sería una opción adecuada en ninguna fase del tratamiento de esta micosis."
                }
              ]
            }
          ]
        }
      ]
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
    const useGrid2 = week.modules.length > 3;
    const isWide = week.modules.length >= 4;
    article.className = `week-card ${week.colorClass}${isWide ? " week-wide" : ""}`;

    const hasModules = week.modules.length > 0;

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
