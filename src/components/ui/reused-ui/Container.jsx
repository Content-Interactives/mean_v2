import React from 'react';

export function Container({ 
	children, 
	className = "", 
	maxWidth = "max-w-[464px]",
	showBorder = true,
	selectNone = true,
	text = "Default Text",
	titleColor = "#5750E3", // Default color
	innerBorderColor = "#5750E330", // Default border color with opacity
	innerBackgroundColor = "#FFFFFF", // Default background color
	showResetButton = false,
	onReset,
	...props 
}) {
	const baseClasses = [
		"w-full",
		"min-w-[300px]",
		"min-h-[500px]",
		maxWidth,
		"mx-auto",
		"mt-5",
		"px-2",
		"bg-white",
		"rounded-lg",
		"flex",
		"flex-col",
	];

	if (showBorder) {
		baseClasses.push("border border-gray-200");
	}

	if (selectNone) {
		baseClasses.push("select-none");
	}

	const containerClasses = `${baseClasses.join(" ")} ${className}`.trim();

	return (
		<div className={containerClasses} {...props}>
			<div className="p-4">
				<div className="flex justify-between items-center mb-4">
					<h2 
						className="text-sm font-bold select-none"
						style={{ color: titleColor }}
					>
						{text}
					</h2>
					{showResetButton && (
						<button 
							className="text-sm px-3 py-1 rounded border transition-colors text-gray-500 hover:text-gray-700 border-gray-300 hover:border-gray-400"
							onClick={onReset}
							title="Reset interactive"
						>
							Reset
						</button>
					)}
				</div>
				<div>
					<div 
						className="w-full border rounded-md relative overflow-hidden" 
						style={{ 
							minHeight: '420px', 
							height: 'auto',
							borderColor: innerBorderColor,
							backgroundColor: innerBackgroundColor
						}}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
