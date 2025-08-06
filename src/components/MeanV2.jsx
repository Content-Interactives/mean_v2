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
import FlexiTelescope from '../assets/All Flexi Poses/SVG/Flexi_Telescope.svg';
import FlexiWizard from '../assets/All Flexi Poses/GIF/Flexi_Wizard-large.gif';
import FlexiStars from '../assets/All Flexi Poses/SVG/Flexi_Stars.svg';

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
	const [hideAddButton, setHideAddButton] = useState(false);
	const [showCountButton, setShowCountButton] = useState(false);
	const [moveSumLeft, setMoveSumLeft] = useState(false);
	const [showTelescopeFlexi, setShowTelescopeFlexi] = useState(false);
	const [fadeOutThumbsUp, setFadeOutThumbsUp] = useState(false);
	const [showQuestionMark, setShowQuestionMark] = useState(false);
	const [lightUpFirstNumber, setLightUpFirstNumber] = useState(false);
	const [lightUpSecondNumber, setLightUpSecondNumber] = useState(false);
	const [lightUpThirdNumber, setLightUpThirdNumber] = useState(false);
	const [lightUpFourthNumber, setLightUpFourthNumber] = useState(false);
	const [lightUpFifthNumber, setLightUpFifthNumber] = useState(false);
	const [lightUpSixthNumber, setLightUpSixthNumber] = useState(false);
	const [questionMarkCount, setQuestionMarkCount] = useState(0);
	const [glowFirstNumber, setGlowFirstNumber] = useState(false);
	const [glowSecondNumber, setGlowSecondNumber] = useState(false);
	const [glowThirdNumber, setGlowThirdNumber] = useState(false);
	const [glowFourthNumber, setGlowFourthNumber] = useState(false);
	const [glowFifthNumber, setGlowFifthNumber] = useState(false);
	const [glowSixthNumber, setGlowSixthNumber] = useState(false);
	const [glowFadeOutFirstNumber, setGlowFadeOutFirstNumber] = useState(false);
	const [glowFadeOutSecondNumber, setGlowFadeOutSecondNumber] = useState(false);
	const [glowFadeOutThirdNumber, setGlowFadeOutThirdNumber] = useState(false);
	const [glowFadeOutFourthNumber, setGlowFadeOutFourthNumber] = useState(false);
	const [glowFadeOutFifthNumber, setGlowFadeOutFifthNumber] = useState(false);
	const [glowFadeOutSixthNumber, setGlowFadeOutSixthNumber] = useState(false);
	const [turnBlackFirstNumber, setTurnBlackFirstNumber] = useState(false);
	const [turnBlackSecondNumber, setTurnBlackSecondNumber] = useState(false);
	const [turnBlackThirdNumber, setTurnBlackThirdNumber] = useState(false);
	const [turnBlackFourthNumber, setTurnBlackFourthNumber] = useState(false);
	const [turnBlackFifthNumber, setTurnBlackFifthNumber] = useState(false);
	const [turnBlackSixthNumber, setTurnBlackSixthNumber] = useState(false);
	const [turnBlackQuestionMark, setTurnBlackQuestionMark] = useState(false);
	const [showDivisionSymbol, setShowDivisionSymbol] = useState(false);
	const [hideCountButton, setHideCountButton] = useState(false);
	const [showFinalThumbsUp, setShowFinalThumbsUp] = useState(false);
	const [fadeOutTelescopeFlexi, setFadeOutTelescopeFlexi] = useState(false);
	const [showDivideButton, setShowDivideButton] = useState(false);
	const [hideDivideButton, setHideDivideButton] = useState(false);
	const [greyOutLitNumbers, setGreyOutLitNumbers] = useState(false);
	const [moveElementsUp, setMoveElementsUp] = useState(false);
	const [showFinalSumCopy, setShowFinalSumCopy] = useState(false);
	const [moveFinalSumCopyToCenter, setMoveFinalSumCopyToCenter] = useState(false);
	const [greyOutFinalSum, setGreyOutFinalSum] = useState(false);
	const [showCountNumberCopy, setShowCountNumberCopy] = useState(false);
	const [moveCountNumberCopyToEnd, setMoveCountNumberCopyToEnd] = useState(false);
	const [greyOutCountNumber, setGreyOutCountNumber] = useState(false);
	const [showDivisionSymbolCopy, setShowDivisionSymbolCopy] = useState(false);
	const [moveDivisionSymbolCopyToEnd, setMoveDivisionSymbolCopyToEnd] = useState(false);
	const [greyOutDivisionSymbol, setGreyOutDivisionSymbol] = useState(false);
	const [fadeOutAllCopies, setFadeOutAllCopies] = useState(false);
	const [showQuotient, setShowQuotient] = useState(false);
	const [showFlexiWizard, setShowFlexiWizard] = useState(false);
	const [fadeOutCurrentFlexiForWizard, setFadeOutCurrentFlexiForWizard] = useState(false);
	const [showFlexiStars, setShowFlexiStars] = useState(false);
	const [fadeOutFlexiWizardForStars, setFadeOutFlexiWizardForStars] = useState(false);

	const numberRefs = useRef([]);
	const centerRef = useRef(null);

	const handleInputChange = (e) => {
		const value = e.target.value;
		// Replace multiple spaces or commas with a single space, and then trim
		const sanitizedValue = value.replace(/[, ]+/g, ' ').trim();
		const numberEntries = sanitizedValue.split(' ').filter(n => n);

		if (numberEntries.some(n => !/^\d+$/.test(n) && n !== '')) {
			setError('Please enter only whole numbers.');
			return;
		} else {
			setError('');
		}
		
		if (numberEntries.length > 6) {
			setError('You can enter a maximum of 6 numbers.');
			// Do not return, to allow the user to edit the input
		} else {
			setError('');
		}
		
		setInputValue(value);
	};

	const handleCalculate = () => {
		setError('');

		const parsedNumbers = inputValue
			.trim()
			.split(/[, ]+/)
			.filter(n => n)
			.map(n => parseInt(n, 10));

		if (parsedNumbers.some(isNaN)) {
			setError('Please enter only valid whole numbers.');
			return;
		}
		if (parsedNumbers.some(n => n < 1 || n > 100)) {
			setError('Numbers must be between 1 and 100.');
			return;
		}
		if (parsedNumbers.length < 2 || parsedNumbers.length > 6) {
			setError('Please enter between 2 and 6 numbers.');
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
		setHideAddButton(false);
		setShowCountButton(false);
		setMoveSumLeft(false);
		setShowTelescopeFlexi(false);
		setFadeOutThumbsUp(false);
		setShowQuestionMark(false);
		setLightUpFirstNumber(false);
		setLightUpSecondNumber(false);
		setLightUpThirdNumber(false);
		setLightUpFourthNumber(false);
		setLightUpFifthNumber(false);
		setLightUpSixthNumber(false);
		setQuestionMarkCount(0);
		setGlowFirstNumber(false);
		setGlowSecondNumber(false);
		setGlowThirdNumber(false);
		setGlowFourthNumber(false);
		setGlowFifthNumber(false);
		setGlowSixthNumber(false);
		setGlowFadeOutFirstNumber(false);
		setGlowFadeOutSecondNumber(false);
		setGlowFadeOutThirdNumber(false);
		setGlowFadeOutFourthNumber(false);
		setGlowFadeOutFifthNumber(false);
		setGlowFadeOutSixthNumber(false);
		setTurnBlackFirstNumber(false);
		setTurnBlackSecondNumber(false);
		setTurnBlackThirdNumber(false);
		setTurnBlackFourthNumber(false);
		setTurnBlackFifthNumber(false);
		setTurnBlackSixthNumber(false);
		setTurnBlackQuestionMark(false);
		setShowDivisionSymbol(false);
		setHideCountButton(false);
		setShowFinalThumbsUp(false);
		setFadeOutTelescopeFlexi(false);
		setShowDivideButton(false);
		setHideDivideButton(false);
		setGreyOutLitNumbers(false);
		setMoveElementsUp(false);
		setShowFinalSumCopy(false);
		setMoveFinalSumCopyToCenter(false);
		setGreyOutFinalSum(false);
		setShowCountNumberCopy(false);
		setMoveCountNumberCopyToEnd(false);
		setGreyOutCountNumber(false);
		setShowDivisionSymbolCopy(false);
		setMoveDivisionSymbolCopyToEnd(false);
		setGreyOutDivisionSymbol(false);
		setFadeOutAllCopies(false);
		setShowQuotient(false);
		setShowFlexiWizard(false);
		setFadeOutCurrentFlexiForWizard(false);
		setShowFlexiStars(false);
		setFadeOutFlexiWizardForStars(false);
	};

	const handleAddNumbers = () => {
		setHideAddButton(true); // Hide the button immediately when clicked
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
																															setTimeout(() => {
																																setShowCountButton(true);
																															}, 500); // Wait for thumbs up animation to complete
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
																											setTimeout(() => {
																												setShowCountButton(true);
																											}, 500); // Wait for thumbs up animation to complete
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
																						setTimeout(() => {
																							setShowCountButton(true);
																						}, 500); // Wait for thumbs up animation to complete
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
																	setTimeout(() => {
																		setShowCountButton(true);
																	}, 500); // Wait for thumbs up animation to complete
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
												setTimeout(() => {
													setShowCountButton(true);
												}, 500); // Wait for thumbs up animation to complete
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

	const handleCountNumbers = () => {
		setHideCountButton(true); // Hide the button immediately when clicked
		setFadeOutThumbsUp(true);
		setTimeout(() => {
			setShowTelescopeFlexi(true);
			setTimeout(() => {
				setMoveSumLeft(true);
				setTimeout(() => {
					setShowQuestionMark(true);
					setTimeout(() => {
						setLightUpFirstNumber(true);
						setGlowFirstNumber(true);
						setQuestionMarkCount(1);
						setTimeout(() => {
							setGlowFadeOutFirstNumber(true);
							setTimeout(() => {
								setGlowFirstNumber(false);
								setGlowFadeOutFirstNumber(false);
															setLightUpSecondNumber(true);
							setGlowSecondNumber(true);
							setQuestionMarkCount(2);
							if (numbers.length > 2) {
								setTimeout(() => {
									setGlowFadeOutSecondNumber(true);
									setTimeout(() => {
										setGlowSecondNumber(false);
										setGlowFadeOutSecondNumber(false);
										setLightUpThirdNumber(true);
										setGlowThirdNumber(true);
										setQuestionMarkCount(3);
										if (numbers.length > 3) {
											setTimeout(() => {
												setGlowFadeOutThirdNumber(true);
												setTimeout(() => {
													setGlowThirdNumber(false);
													setGlowFadeOutThirdNumber(false);
													setLightUpFourthNumber(true);
													setGlowFourthNumber(true);
													setQuestionMarkCount(4);
													if (numbers.length > 4) {
														setTimeout(() => {
															setGlowFadeOutFourthNumber(true);
															setTimeout(() => {
																setGlowFourthNumber(false);
																setGlowFadeOutFourthNumber(false);
																setLightUpFifthNumber(true);
																setGlowFifthNumber(true);
																setQuestionMarkCount(5);
																if (numbers.length > 5) {
																	setTimeout(() => {
																		setGlowFadeOutFifthNumber(true);
																		setTimeout(() => {
																			setGlowFifthNumber(false);
																			setGlowFadeOutFifthNumber(false);
																			setLightUpSixthNumber(true);
																			setGlowSixthNumber(true);
																			setQuestionMarkCount(6);
																			setTimeout(() => {
																				setGlowFadeOutSixthNumber(true);
																																												setTimeout(() => {
						setGlowSixthNumber(false);
						setGlowFadeOutSixthNumber(false);
						setTimeout(() => {
							setTurnBlackFirstNumber(true);
							setTurnBlackSecondNumber(true);
							setTurnBlackThirdNumber(true);
							setTurnBlackFourthNumber(true);
							setTurnBlackFifthNumber(true);
							setTurnBlackSixthNumber(true);
							setTurnBlackQuestionMark(true);
							setTimeout(() => {
								setShowDivisionSymbol(true);
								setTimeout(() => {
									setFadeOutTelescopeFlexi(true);
									setTimeout(() => {
										setShowFinalThumbsUp(true);
										setTimeout(() => {
											setShowDivideButton(true);
										}, 500); // Wait for final thumbs up to appear
									}, 500); // Wait for fade out animation
								}, 500); // Wait for division symbol to appear
							}, 500);
						}, 850);
					}, 300);
																			}, 800);
																		}, 300);
																	}, 800);
																} else {
																	setTimeout(() => {
																		setGlowFadeOutFifthNumber(true);
																																							setTimeout(() => {
					setGlowFifthNumber(false);
					setGlowFadeOutFifthNumber(false);
					setTimeout(() => {
						setTurnBlackFirstNumber(true);
						setTurnBlackSecondNumber(true);
						setTurnBlackThirdNumber(true);
											setTurnBlackFourthNumber(true);
					setTurnBlackFifthNumber(true);
					setTurnBlackQuestionMark(true);
					setTimeout(() => {
						setShowDivisionSymbol(true);
						setTimeout(() => {
							setFadeOutTelescopeFlexi(true);
							setTimeout(() => {
								setShowFinalThumbsUp(true);
								setTimeout(() => {
									setShowDivideButton(true);
								}, 500); // Wait for final thumbs up to appear
							}, 500); // Wait for fade out animation
						}, 500); // Wait for division symbol to appear
					}, 500);
					}, 850);
				}, 300);
																	}, 800);
																}
															}, 300);
														}, 800);
													} else {
														setTimeout(() => {
															setGlowFadeOutFourthNumber(true);
																		setTimeout(() => {
				setGlowFourthNumber(false);
				setGlowFadeOutFourthNumber(false);
				setTimeout(() => {
									setTurnBlackFirstNumber(true);
				setTurnBlackSecondNumber(true);
				setTurnBlackThirdNumber(true);
				setTurnBlackFourthNumber(true);
				setTurnBlackQuestionMark(true);
				setTimeout(() => {
					setShowDivisionSymbol(true);
					setTimeout(() => {
						setFadeOutTelescopeFlexi(true);
						setTimeout(() => {
							setShowFinalThumbsUp(true);
							setTimeout(() => {
								setShowDivideButton(true);
							}, 500); // Wait for final thumbs up to appear
						}, 500); // Wait for fade out animation
					}, 500); // Wait for division symbol to appear
				}, 500);
				}, 850);
			}, 300);
														}, 800);
													}
												}, 300);
											}, 800);
										} else {
											setTimeout(() => {
												setGlowFadeOutThirdNumber(true);
														setTimeout(() => {
			setGlowThirdNumber(false);
			setGlowFadeOutThirdNumber(false);
					setTimeout(() => {
					setTurnBlackFirstNumber(true);
		setTurnBlackSecondNumber(true);
		setTurnBlackThirdNumber(true);
		setTurnBlackQuestionMark(true);
		setTimeout(() => {
			setShowDivisionSymbol(true);
			setTimeout(() => {
				setFadeOutTelescopeFlexi(true);
				setTimeout(() => {
					setShowFinalThumbsUp(true);
					setTimeout(() => {
						setShowDivideButton(true);
					}, 500); // Wait for final thumbs up to appear
				}, 500); // Wait for fade out animation
			}, 500); // Wait for division symbol to appear
		}, 500);
		}, 850);
		}, 300);
											}, 800);
										}
									}, 300);
								}, 800);
							} else {
								setTimeout(() => {
									setGlowFadeOutSecondNumber(true);
																		setTimeout(() => {
		setGlowSecondNumber(false);
		setGlowFadeOutSecondNumber(false);
					setTimeout(() => {
					setTurnBlackFirstNumber(true);
		setTurnBlackSecondNumber(true);
		setTurnBlackQuestionMark(true);
		setTimeout(() => {
			setShowDivisionSymbol(true);
			setTimeout(() => {
				setFadeOutTelescopeFlexi(true);
				setTimeout(() => {
					setShowFinalThumbsUp(true);
					setTimeout(() => {
						setShowDivideButton(true);
					}, 500); // Wait for final thumbs up to appear
				}, 500); // Wait for fade out animation
			}, 500); // Wait for division symbol to appear
		}, 500);
		}, 850);
	}, 300);
								}, 800);
							}
							}, 300);
						}, 800);
					}, 800); // Wait for question mark to appear
				}, 500); // Wait for sum to finish moving left
			}, 500); // Wait for telescope Flexi to appear
		}, 500); // Wait for fade out animation
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
							<p className="text-3xl font-medium text-gray-800">
								{numbers.map((num, index) => (
									<span 
										key={index}
										ref={el => numberRefs.current[index] = el}
									>
										<span className={`transition-colors duration-500 ${
											greyOutLitNumbers && (
												(index === 0 && lightUpFirstNumber) ||
												(index === 1 && lightUpSecondNumber) ||
												(index === 2 && lightUpThirdNumber) ||
												(index === 3 && lightUpFourthNumber) ||
												(index === 4 && lightUpFifthNumber) ||
												(index === 5 && lightUpSixthNumber)
											)
												? 'text-gray-400'
												: (index === 0 && turnBlackFirstNumber) ||
												  (index === 1 && turnBlackSecondNumber) ||
												  (index === 2 && turnBlackThirdNumber) ||
												  (index === 3 && turnBlackFourthNumber) ||
												  (index === 4 && turnBlackFifthNumber) ||
												  (index === 5 && turnBlackSixthNumber)
													? 'text-[#000000]'
													: (index === 0 && lightUpFirstNumber) ||
													  (index === 1 && lightUpSecondNumber) ||
													  (index === 2 && lightUpThirdNumber) ||
													  (index === 3 && lightUpFourthNumber) ||
													  (index === 4 && lightUpFifthNumber) ||
													  (index === 5 && lightUpSixthNumber)
														? 'text-[#339D6A]'
														: (index === 0 && greyOutFirstNumber) || 
														  (index === 1 && greyOutSecondNumber) || 
														  (index === 2 && greyOutThirdNumber) ||
														  (index === 3 && greyOutFourthNumber) ||
														  (index === 4 && greyOutFifthNumber) ||
														  (index === 5 && greyOutSixthNumber)
															? 'text-gray-400' 
															: ''
										} ${
											(index === 0 && glowFirstNumber) ||
											(index === 1 && glowSecondNumber) ||
											(index === 2 && glowThirdNumber) ||
											(index === 3 && glowFourthNumber) ||
											(index === 4 && glowFifthNumber) ||
											(index === 5 && glowSixthNumber)
												? 'glow-fade-in-animation'
												: (index === 0 && glowFadeOutFirstNumber) ||
												  (index === 1 && glowFadeOutSecondNumber) ||
												  (index === 2 && glowFadeOutThirdNumber) ||
												  (index === 3 && glowFadeOutFourthNumber) ||
												  (index === 4 && glowFadeOutFifthNumber) ||
												  (index === 5 && glowFadeOutSixthNumber)
													? 'glow-fade-out-animation'
													: ''
										}`}>
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
									className={`absolute text-3xl font-medium text-gray-800 fade-in-animation ${
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
									className={`absolute text-3xl font-medium text-gray-800 fade-in-animation ${
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
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-3xl font-medium transition-colors duration-500 ${greyOutFinalSum ? 'text-gray-400' : 'text-gray-800'} fade-in-animation ${fadeOutSumAndThirdCopy ? 'fade-out-animation' : ''} ${moveSumLeft ? '-translate-x-[60px]' : ''} ${moveElementsUp ? '-translate-y-[50px]' : ''}`} style={{ transition: (moveSumLeft || moveElementsUp) ? 'all 0.5s ease-in-out' : 'none' }}>
									{numbers[0] + numbers[1]}
								</div>
							)}
							{/* Copy of third number that appears on top of original and moves to center */}
							{showThirdNumberCopy && numbers.length > 2 && (
								<div 
									className={`absolute text-3xl font-medium text-gray-800 fade-in-animation ${
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
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-3xl font-medium transition-colors duration-500 ${greyOutFinalSum ? 'text-gray-400' : 'text-gray-800'} fade-in-animation ${fadeOutFinalSumAndFourthCopy ? 'fade-out-animation' : ''} ${moveSumLeft ? '-translate-x-[60px]' : ''} ${moveElementsUp ? '-translate-y-[50px]' : ''}`} style={{ transition: (moveSumLeft || moveElementsUp) ? 'all 0.5s ease-in-out' : 'none' }}>
									{numbers[0] + numbers[1] + numbers[2]}
								</div>
							)}
							{/* Copy of fourth number that appears on top of original and moves to center */}
							{showFourthNumberCopy && numbers.length > 3 && (
								<div 
									className={`absolute text-3xl font-medium text-gray-800 fade-in-animation ${
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
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-3xl font-medium transition-colors duration-500 ${greyOutFinalSum ? 'text-gray-400' : 'text-gray-800'} fade-in-animation ${fadeOutSumOfFourAndFifthCopy ? 'fade-out-animation' : ''} ${moveSumLeft ? '-translate-x-[60px]' : ''} ${moveElementsUp ? '-translate-y-[50px]' : ''}`} style={{ transition: (moveSumLeft || moveElementsUp) ? 'all 0.5s ease-in-out' : 'none' }}>
									{numbers[0] + numbers[1] + numbers[2] + numbers[3]}
								</div>
							)}
							{/* Copy of fifth number that appears on top of original and moves to center */}
							{showFifthNumberCopy && numbers.length > 4 && (
								<div 
									className={`absolute text-3xl font-medium text-gray-800 fade-in-animation ${
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
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-3xl font-medium transition-colors duration-500 ${greyOutFinalSum ? 'text-gray-400' : 'text-gray-800'} fade-in-animation ${fadeOutSumOfFiveAndSixthCopy ? 'fade-out-animation' : ''} ${moveSumLeft ? '-translate-x-[60px]' : ''} ${moveElementsUp ? '-translate-y-[50px]' : ''}`} style={{ transition: (moveSumLeft || moveElementsUp) ? 'all 0.5s ease-in-out' : 'none' }}>
									{numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]}
								</div>
							)}
							{/* Copy of sixth number that appears on top of original and moves to center */}
							{showSixthNumberCopy && numbers.length > 5 && (
								<div 
									className={`absolute text-3xl font-medium text-gray-800 fade-in-animation ${
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
								<div className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-3xl font-medium transition-colors duration-500 ${greyOutFinalSum ? 'text-gray-400' : 'text-gray-800'} fade-in-animation ${moveSumLeft ? '-translate-x-[60px]' : ''} ${moveElementsUp ? '-translate-y-[50px]' : ''}`} style={{ transition: (moveSumLeft || moveElementsUp) ? 'all 0.5s ease-in-out' : 'none' }}>
									{numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]}
								</div>
							)}
							{/* Question mark that appears to the right of the final sum */}
							{showQuestionMark && numbers.length >= 2 && (
								<div className={`absolute top-[140px] left-1/2 translate-x-[40px] text-3xl font-medium fade-in-animation transition-colors duration-500 ${greyOutCountNumber ? 'text-gray-400' : turnBlackQuestionMark ? 'text-[#000000]' : questionMarkCount > 0 ? 'text-[#339D6A]' : 'text-gray-800'} ${moveElementsUp ? '-translate-y-[50px]' : ''}`} style={{ transition: moveElementsUp ? 'all 0.5s ease-in-out' : 'none' }}>
									{questionMarkCount > 0 ? questionMarkCount : '?'}
								</div>
							)}
							{/* Division symbol that appears between the sum and the counted number */}
							{showDivisionSymbol && numbers.length >= 2 && (
								<div className={`absolute top-[140px] left-1/2 text-3xl font-medium transition-colors duration-500 ${greyOutDivisionSymbol ? 'text-gray-400' : 'text-gray-800'} fade-in-animation ${
									// Calculate the final sum to determine positioning
									(() => {
										const finalSum = numbers.reduce((sum, num) => sum + num, 0);
										return finalSum >= 100 ? '-translate-x-[-5px]' : '-translate-x-[8px]';
									})()
								} ${moveElementsUp ? '-translate-y-[50px]' : ''}`} style={{ transition: moveElementsUp ? 'all 0.5s ease-in-out' : 'none' }}>
									÷
								</div>
							)}
							{/* Copy of final sum that appears overlayed over the final sum and moves down and right */}
														{showFinalSumCopy && numbers.length >= 2 && (
								<div
									className={`absolute top-[140px] left-1/2 -translate-x-1/2 text-3xl font-medium text-gray-800 fade-in-animation ${fadeOutAllCopies ? 'fade-out-animation' : ''} ${
										moveFinalSumCopyToCenter
											? 'translate-x-[-16px] translate-y-[35px]'
											: ''
									} ${moveSumLeft ? '-translate-x-[60px]' : ''} ${moveElementsUp ? '-translate-y-[50px]' : ''}`}
									style={{
										transition: moveFinalSumCopyToCenter ? 'all 0.5s ease-in-out' : 'none'
									}}
								>
									{numbers.reduce((sum, num) => sum + num, 0)}
								</div>
							)}
							{/* Copy of count number that appears overlayed over the actual count number and moves to the end position of the final sum copy */}
							{showCountNumberCopy && numbers.length >= 2 && (
								<div
									className={`absolute top-[140px] left-1/2 text-3xl font-medium text-gray-800 fade-in-animation ${fadeOutAllCopies ? 'fade-out-animation' : ''} ${
										moveCountNumberCopyToEnd
											? 'translate-x-[-18px] translate-y-[35px]'
											: 'translate-x-[40px]'
									} ${moveElementsUp ? '-translate-y-[50px]' : ''}`}
									style={{
										transition: moveCountNumberCopyToEnd ? 'all 0.5s ease-in-out' : 'none'
									}}
								>
									{questionMarkCount > 0 ? questionMarkCount : '?'}
								</div>
							)}
							{/* Copy of division symbol that appears overlayed over the actual division symbol and moves to the end position */}
							{showDivisionSymbolCopy && numbers.length >= 2 && (
								<div
									className={`absolute top-[140px] left-1/2 text-3xl font-medium text-gray-800 fade-in-animation ${fadeOutAllCopies ? 'fade-out-animation' : ''} ${
										moveDivisionSymbolCopyToEnd
											? 'translate-x-[-13px] translate-y-[35px]'
											: ''
									} ${
										// Calculate the final sum to determine positioning
										(() => {
											const finalSum = numbers.reduce((sum, num) => sum + num, 0);
											return finalSum >= 100 ? '-translate-x-[-5px]' : '-translate-x-[8px]';
										})()
									} ${moveElementsUp ? '-translate-y-[50px]' : ''}`}
									style={{
										transition: moveDivisionSymbolCopyToEnd ? 'all 0.5s ease-in-out' : 'none'
									}}
								>
									÷
								</div>
							)}
							{/* Quotient that appears after all copies fade out */}
							{showQuotient && numbers.length >= 2 && (
								<div
									className={`absolute top-[140px] left-1/2 text-3xl font-medium text-[#008545] fade-in-animation ${
										// Position the quotient where the copies ended up
										'translate-x-[-13px] translate-y-[35px]'
									} ${moveElementsUp ? '-translate-y-[50px]' : ''}`}
								>
									{Math.round((numbers.reduce((sum, num) => sum + num, 0) / questionMarkCount) * 100) / 100}
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
						) : !showTelescopeFlexi ? (
							<FlexiText 
								zIndex={1} 
								flexiImage={FlexiThumbsUp} 
								className={`fade-in-up-animation ${fadeOutThumbsUp ? 'fade-out-animation' : ''}`}
							>
								Awesome!
							</FlexiText>
						) : !showFinalThumbsUp ? (
							<FlexiText 
								zIndex={1} 
								flexiImage={FlexiTelescope} 
								className={`fade-in-up-animation ${fadeOutTelescopeFlexi ? 'fade-out-animation' : ''}`}
							>
								Cool, now let's count the numbers
							</FlexiText>
						) : showFlexiStars ? (
							<FlexiText zIndex={1} flexiImage={FlexiStars} className="fade-in-up-animation">
								Yippee, this is the mean!
							</FlexiText>
						) : showFlexiWizard ? (
							<FlexiText zIndex={1} flexiImage={FlexiWizard} className={`fade-in-up-animation ${fadeOutFlexiWizardForStars ? 'fade-out-animation' : ''}`}>
								Dividing...
							</FlexiText>
						) : (
							<FlexiText zIndex={1} flexiImage={FlexiThumbsUp} className={`fade-in-up-animation ${fadeOutCurrentFlexiForWizard ? 'fade-out-animation' : ''}`}>
								Epic, now we can divide the sum by count
							</FlexiText>
						)}
					</>
				)}
				{flexiAnimationComplete && !hideAddButton && (
					<div 
						className="absolute bottom-[0px] right-[0px] z-10 fade-in-animation" 
					>
						<GlowButton onClick={handleAddNumbers}>
							<p className="whitespace-nowrap">Add Numbers</p>
						</GlowButton>
					</div>
				)}
				{showCountButton && !hideCountButton && (
					<div 
						className="absolute bottom-[0px] right-[0px] z-10 fade-in-animation" 
					>
						<GlowButton onClick={handleCountNumbers}>
							<p className="whitespace-nowrap">Count Numbers</p>
						</GlowButton>
					</div>
				)}
				{showDivideButton && !hideDivideButton && (
					<div 
						className="absolute bottom-[0px] right-[0px] z-10 fade-in-animation" 
					>
						<GlowButton onClick={() => {
							// Hide the divide button completely
							setHideDivideButton(true);
							// Change Flexi to Wizard and speech bubble to 'dividing...'
							setFadeOutCurrentFlexiForWizard(true);
							setTimeout(() => {
								setShowFlexiWizard(true);
							}, 500); // Wait for current Flexi to fade out
							
							setGreyOutLitNumbers(true);
							setMoveElementsUp(true);
							// After elements move up, show the final sum copy
							setTimeout(() => {
								setShowFinalSumCopy(true);
								setTimeout(() => {
									setMoveFinalSumCopyToCenter(true);
									setGreyOutFinalSum(true);
									// After the final sum copy moves, show the count number copy
									setTimeout(() => {
										setShowCountNumberCopy(true);
										setTimeout(() => {
											setMoveCountNumberCopyToEnd(true);
											setGreyOutCountNumber(true);
											// After the count number copy moves, show the division symbol copy
											setTimeout(() => {
												setShowDivisionSymbolCopy(true);
												setTimeout(() => {
													setMoveDivisionSymbolCopyToEnd(true);
													setGreyOutDivisionSymbol(true);
													// After the division symbol copy moves, fade out all copies and show quotient
													setTimeout(() => {
														setFadeOutAllCopies(true);
														setTimeout(() => {
															setShowQuotient(true);
															// After the quotient appears, show Flexi Stars
															setTimeout(() => {
																setFadeOutFlexiWizardForStars(true);
																setTimeout(() => {
																	setShowFlexiStars(true);
																}, 500); // Wait for Flexi Wizard to fade out
															}, 500); // Wait for quotient to appear
														}, 500); // Wait for copies to fade out
													}, 500); // Wait for division symbol copy to finish moving
												}, 300); // Wait for division symbol copy to appear
											}, 500); // Wait for count number copy to finish moving
										}, 300); // Wait for count number copy to appear
									}, 500); // Wait for final sum copy to finish moving
								}, 300); // Wait for copy to appear
							}, 500); // Wait for elements to finish moving up
							// TODO: Add divide functionality
							console.log('Divide button clicked');
						}}>
							<p className="whitespace-nowrap">Divide</p>
						</GlowButton>
					</div>
				)}
			</div>
		</Container>
	)
}

export default MeanV2;