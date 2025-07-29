import React, { useState, useEffect } from 'react';
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
	};

	const handleAddNumbers = () => {
		setStartSumming(true);
		setTimeout(() => {
			setHideCommas(true);
		}, 500); // match translate up animation
	};

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
									<span key={index}>
										<span>{num}</span>
										{index < numbers.length - 1 && (
											<span className={hideCommas ? 'fade-out-animation' : ''}> , </span>
										)}
									</span>
								))}
							</p>
						</div>
					)}
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