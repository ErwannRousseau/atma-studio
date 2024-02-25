import { ReactNode } from "react";

export default function ErrorMessage({
	children,
}: { children?: ReactNode | null }) {
	const open = children != null;
	return (
		<div
			className={`grid transition-all ${
				open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
			}`}
		>
			<div className="overflow-hidden text-sm text-buttercup-400/80">
				{children != null ? <span>{children}</span> : "NBSP"}
			</div>
		</div>
	);
}
