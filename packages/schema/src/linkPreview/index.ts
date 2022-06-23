export interface PreviewData {
	description?: string;
	image?: PreviewDataImage;
	link?: string;
	title?: string;
}

export interface PreviewDataImage {
	height: number;
	url: string;
	width: number;
}

export interface Size {
	height: number;
	width: number;
}

export interface LinkPreviewProps {
	containerStyle?: any;
	enableAnimation?: boolean;
	header?: string;
	metadataContainerStyle?: any;
	metadataTextContainerStyle?: any;
	onPreviewDataFetched?: (
		previewData: PreviewData,
	) => void;
	previewData?: PreviewData;
	renderDescription?: (
		description: string,
	) => React.ReactNode;
	renderHeader?: (
		header: string,
	) => React.ReactNode;
	renderImage?: (
		image: PreviewDataImage,
	) => React.ReactNode;
	renderLinkPreview?: (payload: {
		aspectRatio?: number;
		containerWidth: number;
		previewData?: PreviewData;
	}) => React.ReactNode;
	renderMinimizedImage?: (
		image: PreviewDataImage,
	) => React.ReactNode;
	renderText?: (text: string) => React.ReactNode;
	renderTitle?: (title: string) => React.ReactNode;
	requestTimeout?: number;
	text: string;
	textContainerStyle?: any;
	touchableWithoutFeedbackProps?: any;
}
