import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import AlbumList from "./AlbumList";

describe("AlbumsList", () => {
	const albums = [
		{
			userId: 1,
			id: 1,
			title: "kissa love kala",
		},
		{
			userId: 2,
			id: 2,
			title: "Photo 2",
		},
	];
	const fetchPhotosByAlbumId = vi.fn();

	it("displays list of albums", async () => {
		render(
			<Router>
				<AlbumList
					albums={albums}
					fetchPhotosByAlbumId={fetchPhotosByAlbumId}
				/>
			</Router>
		);

		const element = screen.getByText("kissa love kala");

		expect(element).toBeInTheDocument();
		albums.forEach((album) => {
			const linkElement = screen.getByRole("link", { name: album.title });
			expect(linkElement).toBeInTheDocument();
			expect(linkElement).toHaveAttribute("href", `/albums/${album.id}/photos`);
		});

		const title = screen.getByRole("link", { name: "kissa love kala" });
		await userEvent.click(title);
		expect(fetchPhotosByAlbumId).toHaveBeenCalledWith(1);
	});
});
