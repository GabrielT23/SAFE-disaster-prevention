
export default function Footer() {
	return (
		<div className="flex absolute w-[100%] max-w-[1600px] h-[23px] mx-auto bottom-0 bg-clientGradient justify-center items-center z-20">
			<div className="flex justify-between w-[70%] font-extraligh text-xs text-[#5B5B5B]">
				<p className="flex flex-1 justify-center min-w-[400px]">
					SAFE prevenção de catástrofes
				</p>
				<p className="flex flex-1 justify-center text-[8px]">|</p>
				<p className="flex flex-1 justify-center"> © 2024</p>
				<p className="flex flex-1 justify-center text-[8px]">|</p>
				<p className="flex flex-1 justify-center min-w-[400px]">
					Desenvolvido por Quarteto Codástico
				</p>
			</div>
		</div>
	);
}
