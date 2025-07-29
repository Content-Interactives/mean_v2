import React, { useState } from 'react';
import { Container } from './ui/reused-ui/Container';
import { Input } from './ui/reused-ui/Input';
import { GlowButton } from './ui/reused-ui/GlowButton';
import { FlexiText } from './ui/reused-ui/FlexiText';
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';

const MeanV2 = () => {
	const [inputValue, setInputValue] = useState('');
	const [numbers, setNumbers] = useState([]);
	const [error, setError] = useState('');
	const [showCalculateButton, setShowCalculateButton] = useState(true);
	const [isAnimatingOut, setIsAnimatingOut] = useState(false);
	const [showNumbers, setShowNumbers] = useState(false);

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
		setIsAnimatingOut(true);

		setTimeout(() => {
			setShowCalculateButton(false);
			setShowNumbers(true);
		}, 500); // Wait for shrink animation to finish
	};

	const handleReset = () => {
		setInputValue('');
		setNumbers([]);
		setError('');
		setShowCalculateButton(true);
		setShowNumbers(false);
		setIsAnimatingOut(false);
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
                    {showCalculateButton && (
						<div className={`w-full max-w-xs relative top-[150px] ${isAnimatingOut ? 'shrink-out-animation' : ''}`}>
							<Input
								value={inputValue}
								onChange={handleInputChange}
								placeholder="Enter 2-6 numbers (1-100 each)"
								error={error}
								disabled={isAnimatingOut}
							/>
						</div>
					)}
					{showNumbers && (
						<div className="text-center grow-in-animation relative top-[170px]">
							<p className="text-2xl font-medium text-gray-800">
								{numbers.join(' , ')}
							</p>
						</div>
					)}
                </div>

                <div className="flex justify-end">
                    {showCalculateButton && (
						<GlowButton 
							onClick={handleCalculate}
							className={isAnimatingOut ? 'shrink-out-animation' : ''}
							autoShrinkOnClick={false}
						>
                        	Calculate Mean
                    	</GlowButton>
					)}
                </div>
				<FlexiText zIndex={1}>
					Enter some numbers to find the mean
				</FlexiText>
			</div>
		</Container>
	)
}

export default MeanV2;