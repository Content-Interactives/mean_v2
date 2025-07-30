import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/reused-ui/Container';
import { Input } from './ui/reused-ui/Input';
import { GlowButton } from './ui/reused-ui/GlowButton';
import { FlexiText } from './ui/reused-ui/FlexiText';
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import FlexiWave from '../assets/All Flexi Poses/SVG/Flexi_Wave.svg';
import FlexiConfident from '../assets/All Flexi Poses/SVG/Flexi_Confident.svg';

const MeanV2 = () => {
	const [inputValue, setInputValue] = useState('');
	const [numbers, setNumbers] = useState([]);
	const [error, setError] = useState('');
	const [step, setStep] = useState('input'); // 'input', 'calculating', 'summing'
	const [flexiAnimationComplete, setFlexiAnimationComplete] = useState(false);
	const [startSumming, setStartSumming] = useState(false);
	const [hideCommas, setHideCommas] = useState(false);
	const [showFirstNumberCopy, setShowFirstNumberCopy] = useState(false);
	const [moveCopyToCenter, setMoveCopyToCenter] = useState(false);
	const [firstNumberPosition, setFirstNumberPosition] = useState({ x: 0, y: 0 });
	const [greyOutFirstNumber, setGreyOutFirstNumber] = useState(false);
	const [showSecondNumberCopy, setShowSecondNumberCopy] = useState(false);
	const [moveSecondCopyToCenter, setMoveSecondCopyToCenter] = useState(false);
	const [secondNumberPosition, setSecondNumberPosition] = useState({ x: 0, y: 0 });
	const [greyOutSecondNumber, setGreyOutSecondNumber] = useState(false);
	const [fadeOutCopies, setFadeOutCopies] = useState(false);
	const [showSum, setShowSum] = useState(false);

	const numberRefs = useRef([]);
	const centerRef = useRef(null);

	const handleInputChange = (e) => {
		const value = e.target.value;
		const numberEntries = value.split(/[, ]+/).filter(n => n.trim() !== '');

		if (numberEntries.length > 6) {
			return;
		}
		setInputValue(e.target.value);
	};

	const handleCalculate = () => {
		setError('');

		const parsedNumbers = inputValue
			.trim()
			.split(/[, ]+/)
			.filter(n => n)
			.map(Number);

		if (parsedNumbers.some(isNaN) || parsedNumbers.length === 0) {
			setError('Please enter only valid numbers.');
			return;
		}
		if (parsedNumbers.length < 2 || parsedNumbers.length > 6) {
			setError('Please enter between 2 and 6 numbers.');
			return;
		}
		if (parsedNumbers.some(n => n < 1 || n > 100)) {
			setError('Numbers must be between 1 and 100.');
			return;
		}

		setNumbers(parsedNumbers);
		setStep('calculating');

		setTimeout(() => {
			setStep('summing');
			setTimeout(() => {
				setFlexiAnimationComplete(true);
			}, 500); // match fade-in animation
		}, 300); // Wait for animations to finish
	};

	const handleReset = () => {
		setInputValue('');
		setNumbers([]);
		setError('');
		setStep('input');
		setFlexiAnimationComplete(false);
		setStartSumming(false);
		setHideCommas(false);
		setShowFirstNumberCopy(false);
		setMoveCopyToCenter(false);
		setFirstNumberPosition({ x: 0, y: 0 });
		setGreyOutFirstNumber(false);
		setShowSecondNumberCopy(false);
		setMoveSecondCopyToCenter(false);
		setSecondNumberPosition({ x: 0, y: 0 });
		setGreyOutSecondNumber(false);
		setFadeOutCopies(false);
		setShowSum(false);
	};

	const handleAddNumbers = () => {
		setStartSumming(true);
		setTimeout(() => {
			setHideCommas(true);
			// Show copy of first number on top of original
			setTimeout(() => {
				setShowFirstNumberCopy(true);
				// Move copy to center after it appears
				setTimeout(() => {
					setMoveCopyToCenter(true);
					setGreyOutFirstNumber(true); // Turn first number grey when copy moves
					// Show second number copy after first copy moves
					setTimeout(() => {
						setShowSecondNumberCopy(true);
						// Move second copy to center after it appears
						setTimeout(() => {
							setMoveSecondCopyToCenter(true);
							setGreyOutSecondNumber(true); // Turn second number grey when copy moves
							// Fade out copies and show sum after second copy moves
							setTimeout(() => {
								setFadeOutCopies(true);
								setTimeout(() => {
									setShowSum(true);
								}, 500); // Wait for fade out animation
							}, 500); // Wait for second copy to finish moving
						}, 300); // Wait for second copy to appear
					}, 500); // Wait for first copy to finish moving
				}, 300); // Wait for copy to appear
			}, 500); // Wait for translate-up animation to finish
		}, 500); // match translate up animation
	};

	useEffect(() => {
		if (showFirstNumberCopy && numberRefs.current[0]) {
			const firstNumRect = numberRefs.current[0].getBoundingClientRect();
			const containerRect = numberRefs.current[0].closest('.relative').getBoundingClientRect();
			
			setFirstNumberPosition({
				x: firstNumRect.left - containerRect.left,
				y: firstNumRect.top - containerRect.top
			});
		}
	}, [showFirstNumberCopy]);

	useEffect(() => {
		if (showSecondNumberCopy && numberRefs.current[1]) {
			const secondNumRect = numberRefs.current[1].getBoundingClientRect();
			const containerRect = numberRefs.current[1].closest('.relative').getBoundingClientRect();
			
			setSecondNumberPosition({
				x: secondNumRect.left - containerRect.left,
				y: secondNumRect.top - containerRect.top
			});
		}
	}, [showSecondNumberCopy]);

	return (
		<Container
			text="MeanV2"
			titleColor="#008545"
			innerBorderColor="#B3DAC7"
			innerBackgroundColor="#E8EDF5"
			showResetButton={true}
			onReset={handleReset}
		>
			<div className="p-4 h-full flex flex-col">
                <div className="flex-grow flex flex-col items-center justify-center">
                    {step !== 'summing' && (
						<div className={`w-full max-w-xs relative top-[150px] ${step === 'calculating' ? 'shrink-out-animation' : ''}`}>
							<Input
								value={inputValue}
								onChange={handleInputChange}
								placeholder="Enter 2-6 numbers (1-100 each)"
								error={error}
								disabled={step === 'calculating'}
								focusColor="#339D6A"
							/>
						</div>
					)}
					{step === 'summing' && (
						<div 
							className={`text-center grow-in-animation relative top-[170px] ${startSumming ? 'translate-up-animation' : ''}`}
						>
							<p className="text-2xl font-medium text-gray-800">
								{numbers.map((num, index) => (
									<span 
										key={index}
										ref={el => numberRefs.current[index] = el}
									>
										<span className={
											(index === 0 && greyOutFirstNumber) || (index === 1 && greyOutSecondNumber) 
												? 'text-gray-400' 
												: ''
										}>
											{num}
										</span>
										{index < numbers.length - 1 && (
											<span className={hideCommas ? 'fade-out-animation' : ''}> , </span>
										)}
									</span>
								))}
							</p>
							{/* Copy of first number that appears on top of original and moves to center */}
							{showFirstNumberCopy && numbers.length > 0 && (
								<div 
									className={`absolute text-2xl font-medium text-gray-800 fade-in-animation ${
										moveCopyToCenter 
											? 'top-[140px] left-1/2 -translate-x-1/2' 
											: ''
									} ${fadeOutCopies ? 'fade-out-animation' : ''}`}
									style={{
										transition: moveCopyToCenter ? 'all 0.5s ease-in-out' : 'none',
										left: moveCopyToCenter ? undefined : `${firstNumberPosition.x}px`,
										top: moveCopyToCenter ? undefined : `${firstNumberPosition.y}px`
									}}
								>
									{numbers[0]}
								</div>
							)}
							{/* Copy of second number that appears on top of original and moves to center */}
							{showSecondNumberCopy && numbers.length > 1 && (
								<div 
									className={`absolute text-2xl font-medium text-gray-800 fade-in-animation ${
										moveSecondCopyToCenter 
											? 'top-[140px] left-1/2 -translate-x-1/2' 
											: ''
									} ${fadeOutCopies ? 'fade-out-animation' : ''}`}
									style={{
										transition: moveSecondCopyToCenter ? 'all 0.5s ease-in-out' : 'none',
										left: moveSecondCopyToCenter ? undefined : `${secondNumberPosition.x}px`,
										top: moveSecondCopyToCenter ? undefined : `${secondNumberPosition.y}px`
									}}
								>
									{numbers[1]}
								</div>
							)}
							{/* Sum of first two numbers that appears after copies fade out */}
							{showSum && numbers.length > 1 && (
								<div className="absolute top-[140px] left-1/2 -translate-x-1/2 text-2xl font-medium text-gray-800 fade-in-animation">
									{numbers[0] + numbers[1]}
								</div>
							)}
						</div>
					)}
					<div ref={centerRef} className="absolute top-[170px] left-1/2 -translate-x-1/2"></div>
                </div>

                <div className={`flex justify-end ${step === 'calculating' ? 'shrink-out-animation' : ''}`}>
                    {step === 'input' && (
						<GlowButton 
							onClick={handleCalculate}
							autoShrinkOnClick={false}
						>
                        	Calculate Mean
                    	</GlowButton>
					)}
                </div>

				<div 
					className={`
						${step === 'calculating' ? 'fast-fade-out-animation' : ''}
						${step === 'summing' ? 'hidden' : ''}
					`}
				>
					{step !== 'summing' && (
						<FlexiText zIndex={1} flexiImage={FlexiWave}>
							Enter some numbers to find the mean
						</FlexiText>
					)}
				</div>
				
				{step === 'summing' && (
					<>
						<FlexiText zIndex={1} flexiImage={FlexiConfident} className="fade-in-up-animation">
							Great, now we sum all the numbers first
						</FlexiText>
					</>
				)}
				{flexiAnimationComplete && (
					<div 
						className="absolute bottom-[0px] right-[0px] z-10 fade-in-animation" 
					>
						<GlowButton onClick={handleAddNumbers}>
							<p className="whitespace-nowrap">Add Numbers</p>
						</GlowButton>
					</div>
				)}
			</div>
		</Container>
	)
}

export default MeanV2;