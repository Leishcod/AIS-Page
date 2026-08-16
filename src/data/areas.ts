/**
 * Type definitions and data source for the "Áreas de Impacto" section.
 * Each area represents an organizational division within AIS.
 */

import areaAcademica from "../assets/Areas/area_academica.jpg";
import areaRelaciones from "../assets/Areas/area_relaciones.jpg";
import areaMarketing from "../assets/Areas/area_marketing.jpg";
import areaTecnologia from "../assets/Areas/area_tecnologia.jpg";
import areaProyectos from "../assets/Areas/area_proyectos.jpg";
import areaAuspicio from "../assets/Areas/area_auspicio.jpg";

/** SVG icon identifiers used by the area selector cards */
export type AreaIconName =
	| "academica"
	| "relaciones"
	| "marketing"
	| "tecnologia"
	| "proyectos"
	| "auspicio";

/** Contract for the data that defines an organizational area */
export interface AreaInfo {
	/** Unique slug used as an identifier and for DOM targeting */
	id: string;
	/** Display name shown in headings and cards */
	title: string;
	/** Subtitle displayed above the mission text */
	subtitle: string;
	/** Brief description of the area's core mission */
	mission: string;
	/** Icon identifier for the selector card */
	iconName: AreaIconName;
	/** Astro-optimized image import for the showcase */
	image: ImageMetadata;
	/** Alt text for the showcase image */
	imageAlt: string;
}

/** Complete dataset of AIS organizational areas */
export const areasData: AreaInfo[] = [
	{
		id: "academica",
		title: "Académica",
		subtitle: "Dirección Académica",
		mission:
			"Definir el contenido académico general del Congreso, armar el cronograma de sesiones y asegurar la coherencia temática.",
		iconName: "academica",
		image: areaAcademica,
		imageAlt:
			"Profesional analizando datos en un centro de servidores con iluminación azul neón",
	},
	{
		id: "relaciones",
		title: "Relaciones Institucionales",
		subtitle: "Dirección de Relaciones Institucionales",
		mission:
			"Gestionar alianzas estratégicas con universidades, empresas y organizaciones para fortalecer la red de la AIS a nivel nacional e internacional.",
		iconName: "relaciones",
		image: areaRelaciones,
		imageAlt:
			"Profesionales cerrando acuerdos en una sala de reuniones corporativa",
	},
	{
		id: "marketing",
		title: "Marketing y Comunicaciones",
		subtitle: "Dirección de Marketing y Comunicaciones",
		mission:
			"Diseñar y ejecutar la estrategia de comunicación, branding y difusión de la AIS para posicionar la organización en el ecosistema tecnológico.",
		iconName: "marketing",
		image: areaMarketing,
		imageAlt:
			"Equipo creativo trabajando en campañas de marketing digital con múltiples pantallas",
	},
	{
		id: "tecnologia",
		title: "Tecnología e Infraestructura",
		subtitle: "Dirección de Tecnología e Infraestructura",
		mission:
			"Administrar y desarrollar la infraestructura tecnológica de la AIS, incluyendo plataformas digitales, servidores y herramientas internas.",
		iconName: "tecnologia",
		image: areaTecnologia,
		imageAlt:
			"Técnica monitoreando infraestructura de red en un centro de datos",
	},
	{
		id: "proyectos",
		title: "Dirección de Proyectos",
		subtitle: "Dirección de Proyectos",
		mission:
			"Coordinar y supervisar la planificación, ejecución y entrega de los proyectos estratégicos de la AIS, asegurando el cumplimiento de objetivos y plazos.",
		iconName: "proyectos",
		image: areaProyectos,
		imageAlt:
			"Equipo colaborando en una sala de proyectos con tablero kanban digital",
	},
	{
		id: "auspicio",
		title: "Auspicio y Sponsors",
		subtitle: "Dirección de Auspicios y Patrocinios",
		mission:
			"Captar y gestionar patrocinios, auspicios y recursos financieros para garantizar la sostenibilidad de los eventos y actividades de la AIS.",
		iconName: "auspicio",
		image: areaAuspicio,
		imageAlt:
			"Evento corporativo de networking con iluminación premium y sponsors",
	},
];
