import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/reused-ui/Container';
import { Input } from './ui/reused-ui/Input';
import { GlowButton } from './ui/reused-ui/GlowButton';
import { FlexiText } from './ui/reused-ui/FlexiText';
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import FlexiWave from '../assets/All Flexi Poses/SVG/Flexi_Wave.svg';
import FlexiConfident from '../assets/All Flexi Poses/SVG/Flexi_Confident.svg';
import FlexiThumbsUp from '../assets/All Flexi Poses/SVG/Flexi_ThumbsUp.svg';

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
	const [showThirdNumberCopy, setShowThirdNumberCopy] = useState(false);
	const [moveThirdCopyToCenter, setMoveThirdCopyToCenter] = useState(false);
	const [thirdNumberPosition, setThirdNumberPosition] = useState({ x: 0, y: 0 });
	const [greyOutThirdNumber, setGreyOutThirdNumber] = useState(false);
	const [fadeOutSumAndThirdCopy, setFadeOutSumAndThirdCopy] = useState(false);
	const [showFinalSum, setShowFinalSum] = useState(false);
	const [showFourthNumberCopy, setShowFourthNumberCopy] = useState(false);
	const [moveFourthCopyToCenter, setMoveFourthCopyToCenter] = useState(false);
	const [fourthNumberPosition, setFourthNumberPosition] = useState({ x: 0, y: 0 });
	const [greyOutFourthNumber, setGreyOutFourthNumber] = useState(false);
	const [fadeOutFinalSumAndFourthCopy, setFadeOutFinalSumAndFourthCopy] = useState(false);
	const [showSumOfFour, setShowSumOfFour] = useState(false);
	const [showFifthNumberCopy, setShowFifthNumberCopy] = useState(false);
	const [moveFifthCopyToCenter, setMoveFifthCopyToCenter] = useState(false);
	const [fifthNumberPosition, setFifthNumberPosition] = useState({ x: 0, y: 0 });
	const [greyOutFifthNumber, setGreyOutFifthNumber] = useState(false);
	const [fadeOutSumOfFourAndFifthCopy, setFadeOutSumOfFourAndFifthCopy] = useState(false);
	const [showSumOfFive, setShowSumOfFive] = useState(false);
	const [showSixthNumberCopy, setShowSixthNumberCopy] = useState(false);
	const [moveSixthCopyToCenter, setMoveSixthCopyToCenter] = useState(false);
	const [sixthNumberPosition, setSixthNumberPosition] = useState({ x: 0, y: 0 });
	const [greyOutSixthNumber, setGreyOutSixthNumber] = useState(false);
	const [fadeOutSumOfFiveAndSixthCopy, setFadeOutSumOfFiveAndSixthCopy] = useState(false);
	const [showFinalSumOfAll, setShowFinalSumOfAll] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(false);
	const [fadeOutCurrentFlexi, setFadeOutCurrentFlexi] = useState(false);

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
		setShowThirdNumberCopy(false);
		setMoveThirdCopyToCenter(false);
		setThirdNumberPosition({ x: 0, y: 0 });
		setGreyOutThirdNumber(false);
		setFadeOutSumAndThirdCopy(false);
		setShowFinalSum(false);
		setShowFourthNumberCopy(false);
		setMoveFourthCopyToCenter(false);
		setFourthNumberPosition({ x: 0, y: 0 });
		setGreyOutFourthNumber(false);
		setFadeOutFinalSumAndFourthCopy(false);
		setShowSumOfFour(false);
		setShowFifthNumberCopy(false);
		setMoveFifthCopyToCenter(false);
		setFifthNumberPosition({ x: 0, y: 0 });
		setGreyOutFifthNumber(false);
		setFadeOutSumOfFourAndFifthCopy(false);
		setShowSumOfFive(false);
		setShowSixthNumberCopy(false);
		setMoveSixthCopyToCenter(false);
		setSixthNumberPosition({ x: 0, y: 0 });
		setGreyOutSixthNumber(false);
		setFadeOutSumOfFiveAndSixthCopy(false);
		setShowFinalSumOfAll(false);
		setAnimationComplete(false);
		setFadeOutCurrentFlexi(false);
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
									// Show third number copy after sum appears (if there's a third number)
									if (numbers.length > 2) {
										setTimeout(() => {
											setShowThirdNumberCopy(true);
											// Move third copy to center after it appears
											setTimeout(() => {
												setMoveThirdCopyToCenter(true);
												setGreyOutThirdNumber(true); // Turn third number grey when copy moves
												// Fade out sum and third copy, show final sum
												setTimeout(() => {
													setFadeOutSumAndThirdCopy(true);
													setTimeout(() => {
														setShowFinalSum(true);
														// Show fourth number copy after final sum appears (if there's a fourth number)
														if (numbers.length > 3) {
															setTimeout(() => {
																setShowFourthNumberCopy(true);
																// Move fourth copy to center after it appears
																setTimeout(() => {
																	setMoveFourthCopyToCenter(true);
																	setGreyOutFourthNumber(true); // Turn fourth number grey when copy moves
																	// Fade out final sum and fourth copy, show sum of four
																	setTimeout(() => {
																		setFadeOutFinalSumAndFourthCopy(true);
																		setTimeout(() => {
																			setShowSumOfFour(true);
																			// Show fifth number copy after sum of four appears (if there's a fifth number)
																			if (numbers.length > 4) {
																				setTimeout(() => {
																					setShowFifthNumberCopy(true);
																					// Move fifth copy to center after it appears
																					setTimeout(() => {
																						setMoveFifthCopyToCenter(true);
																						setGreyOutFifthNumber(true); // Turn fifth number grey when copy moves
																						// Fade out sum of four and fifth copy, show sum of five
																						setTimeout(() => {
																							setFadeOutSumOfFourAndFifthCopy(true);
																							setTimeout(() => {
																								setShowSumOfFive(true);
																								// Show sixth number copy after sum of five appears (if there's a sixth number)
																								if (numbers.length > 5) {
																									setTimeout(() => {
																										setShowSixthNumberCopy(true);
																										// Move sixth copy to center after it appears
																										setTimeout(() => {
																											setMoveSixthCopyToCenter(true);
																											setGreyOutSixthNumber(true); // Turn sixth number grey when copy moves
																											// Fade out sum of five and sixth copy, show final sum of all
																											setTimeout(() => {
																												setFadeOutSumOfFiveAndSixthCopy(true);
																												setTimeout(() => {
																													setShowFinalSumOfAll(true);
																													setTimeout(() => {
																														setFadeOutCurrentFlexi(true);
																														setTimeout(() => {
																															setAnimationComplete(true);
																														}, 500); // Wait for fade out animation
																													}, 500); // Wait for final sum to appear
																												}, 500); // Wait for fade out animation
																											}, 500); // Wait for sixth copy to finish moving
																										}, 300); // Wait for sixth copy to appear
																									}, 500); // Wait for sum of five to appear
																								} else {
																									setTimeout(() => {
																										setFadeOutCurrentFlexi(true);
																										setTimeout(() => {
																											setAnimationComplete(true);
																										}, 500); // Wait for fade out animation
																									}, 500); // Wait for sum of five to appear
																								}
																							}, 500); // Wait for fade out animation
																						}, 500); // Wait for fifth copy to finish moving
																					}, 300); // Wait for fifth copy to appear
																				}, 500); // Wait for sum of four to appear
																			} else {
																				setTimeout(() => {
																					setFadeOutCurrentFlexi(true);
																					setTimeout(() => {
																						setAnimationComplete(true);
																					}, 500); // Wait for sum of four to appear
																				}, 500); // Wait for fade out animation
																			}
																		}, 500); // Wait for fade out animation
																	}, 500); // Wait for fourth copy to finish moving
																}, 300); // Wait for fourth copy to appear
															}, 500); // Wait for final sum to appear
														} else {
															setTimeout(() => {
																setFadeOutCurrentFlexi(true);
																setTimeout(() => {
																	setAnimationComplete(true);
																}, 500); // Wait for final sum to appear
															}, 500); // Wait for fade out animation
														}
													}, 500); // Wait for fade out animation
												}, 500); // Wait for third copy to finish moving
											}, 300); // Wait for third copy to appear
										}, 500); // Wait for sum to appear
									} else {
										setTimeout(() => {
											setFadeOutCurrentFlexi(true);
											setTimeout(() => {
												setAnimationComplete(true);
											}, 500); // Wait for sum to appear
										}, 500); // Wait for fade out animation
									}
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

	useEffect(() => {
		if (showThirdNumberCopy && numberRefs.current[2]) {
			const thirdNumRect = numberRefs.current[2].getBoundingClientRect();
			const containerRect = numberRefs.current[2].closest('.relative').getBoundingClientRect();
			
			setThirdNumberPosition({
				x: thirdNumRect.left - containerRect.left,
				y: thirdNumRect.top - containerRect.top
			});
		}
	}, [showThirdNumberCopy]);

	useEffect(() => {
		if (showFourthNumberCopy && numberRefs.current[3]) {
			const fourthNumRect = numberRefs.current[3].getBoundingClientRect();
			const containerRect = numberRefs.current[3].closest('.relative').getBoundingClientRect();
			
			setFourthNumberPosition({
				x: fourthNumRect.left - containerRect.left,
				y: fourthNumRect.top - containerRect.top
			});
		}
	}, [showFourthNumberCopy]);

	useEffect(() => {
		if (showFifthNumberCopy && numberRefs.current[4]) {
			const fifthNumRect = numberRefs.current[4].getBoundingClientRect();
			const containerRect = numberRefs.current[4].closest('.relative').getBoundingClientRect();
			
			setFifthNumberPosition({
				x: fifthNumRect.left - containerRect.left,
				y: fifthNumRect.top - containerRect.top
			});
		}
	}, [showFifthNumberCopy]);

	useEffect(() => {
		if (showSixthNumberCopy && numberRefs.current[5]) {
			const sixthNumRect = numberRefs.current[5].getBoundingClientRect();
			const containerRect = numberRefs.current[5].closest('.relative').getBoundingClientRect();
			
			setSixthNumberPosition({
				x: sixthNumRect.left - containerRect.left,
				y: sixthNumRect.top - containerRect.top
			});
		}
	}, [showSixthNumberCopy]);

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
											(index === 0 && greyOutFirstNumber) || 
											(index === 1 && greyOutSecondNumber) || 
											(index === 2 && greyOutThirdNumber) ||
											(index === 3 && greyOutFourthNumber) ||
											(index === 4 && greyOutFifthNumber) ||
											(index === 5 && greyOutSixthNumber)
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
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-2xl font-medium text-gray-800 fade-in-animation ${fadeOutSumAndThirdCopy ? 'fade-out-animation' : ''}`}>
									{numbers[0] + numbers[1]}
								</div>
							)}
							{/* Copy of third number that appears on top of original and moves to center */}
							{showThirdNumberCopy && numbers.length > 2 && (
								<div 
									className={`absolute text-2xl font-medium text-gray-800 fade-in-animation ${
										moveThirdCopyToCenter 
											? 'top-[140px] left-1/2 -translate-x-1/2' 
											: ''
									} ${fadeOutSumAndThirdCopy ? 'fade-out-animation' : ''}`}
									style={{
										transition: moveThirdCopyToCenter ? 'all 0.5s ease-in-out' : 'none',
										left: moveThirdCopyToCenter ? undefined : `${thirdNumberPosition.x}px`,
										top: moveThirdCopyToCenter ? undefined : `${thirdNumberPosition.y}px`
									}}
								>
									{numbers[2]}
								</div>
							)}
							{/* Final sum of first three numbers that appears after sum and third copy fade out */}
							{showFinalSum && numbers.length > 2 && (
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-2xl font-medium text-gray-800 fade-in-animation ${fadeOutFinalSumAndFourthCopy ? 'fade-out-animation' : ''}`}>
									{numbers[0] + numbers[1] + numbers[2]}
								</div>
							)}
							{/* Copy of fourth number that appears on top of original and moves to center */}
							{showFourthNumberCopy && numbers.length > 3 && (
								<div 
									className={`absolute text-2xl font-medium text-gray-800 fade-in-animation ${
										moveFourthCopyToCenter 
											? 'top-[140px] left-1/2 -translate-x-1/2' 
											: ''
									} ${fadeOutFinalSumAndFourthCopy ? 'fade-out-animation' : ''}`}
									style={{
										transition: moveFourthCopyToCenter ? 'all 0.5s ease-in-out' : 'none',
										left: moveFourthCopyToCenter ? undefined : `${fourthNumberPosition.x}px`,
										top: moveFourthCopyToCenter ? undefined : `${fourthNumberPosition.y}px`
									}}
								>
									{numbers[3]}
								</div>
							)}
							{/* Sum of first four numbers that appears after final sum and fourth copy fade out */}
							{showSumOfFour && numbers.length > 3 && (
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-2xl font-medium text-gray-800 fade-in-animation ${fadeOutSumOfFourAndFifthCopy ? 'fade-out-animation' : ''}`}>
									{numbers[0] + numbers[1] + numbers[2] + numbers[3]}
								</div>
							)}
							{/* Copy of fifth number that appears on top of original and moves to center */}
							{showFifthNumberCopy && numbers.length > 4 && (
								<div 
									className={`absolute text-2xl font-medium text-gray-800 fade-in-animation ${
										moveFifthCopyToCenter 
											? 'top-[140px] left-1/2 -translate-x-1/2' 
											: ''
									} ${fadeOutSumOfFourAndFifthCopy ? 'fade-out-animation' : ''}`}
									style={{
										transition: moveFifthCopyToCenter ? 'all 0.5s ease-in-out' : 'none',
										left: moveFifthCopyToCenter ? undefined : `${fifthNumberPosition.x}px`,
										top: moveFifthCopyToCenter ? undefined : `${fifthNumberPosition.y}px`
									}}
								>
									{numbers[4]}
								</div>
							)}
							{/* Sum of first five numbers that appears after sum of four and fifth copy fade out */}
							{showSumOfFive && numbers.length > 4 && (
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-2xl font-medium text-gray-800 fade-in-animation ${fadeOutSumOfFiveAndSixthCopy ? 'fade-out-animation' : ''}`}>
									{numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]}
								</div>
							)}
							{/* Copy of sixth number that appears on top of original and moves to center */}
							{showSixthNumberCopy && numbers.length > 5 && (
								<div 
									className={`absolute text-2xl font-medium text-gray-800 fade-in-animation ${
										moveSixthCopyToCenter 
											? 'top-[140px] left-1/2 -translate-x-1/2' 
											: ''
									} ${fadeOutSumOfFiveAndSixthCopy ? 'fade-out-animation' : ''}`}
									style={{
										transition: moveSixthCopyToCenter ? 'all 0.5s ease-in-out' : 'none',
										left: moveSixthCopyToCenter ? undefined : `${sixthNumberPosition.x}px`,
										top: moveSixthCopyToCenter ? undefined : `${sixthNumberPosition.y}px`
									}}
								>
									{numbers[5]}
								</div>
							)}
							{/* Final sum of all numbers that appears after sum of five and sixth copy fade out */}
							{showFinalSumOfAll && numbers.length > 5 && (
								<div className="absolute top-[140px] left-1/2 -translate-x-1/2 text-2xl font-medium text-gray-800 fade-in-animation">
									{numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]}
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
						{!animationComplete ? (
							<FlexiText 
								zIndex={1} 
								flexiImage={FlexiConfident} 
								className={`fade-in-up-animation ${fadeOutCurrentFlexi ? 'fade-out-animation' : ''}`}
							>
								Great, now we sum all the numbers first
							</FlexiText>
						) : (
							<FlexiText zIndex={1} flexiImage={FlexiThumbsUp} className="fade-in-up-animation">
								Awesome!
							</FlexiText>
						)}
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