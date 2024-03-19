import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImageGrid from "../Components/ImageGrid";

describe("ImageGrid", () => {
	const photos = [
		{
			id: 1,
			thumbnailUrl: "http://localhost:3001/image1.jpg",
			url: "http://localhost:3001/image1.jpg",
			title: "Photo 1",
		},
		{
			id: 2,
			thumbnailUrl: "http://localhost:3001/image1.jpg",
			url: "http://localhost:3001/image1.jpg",
			title: "Photo 2",
		},
		{
			id: 3,
			thumbnailUrl: "http://localhost:3001/image2.jpg",
			url: "http://localhost:3001/image2.jpg",
			title: "Photo 3",
		},
		{
			id: 4,
			thumbnailUrl: "http://localhost:3001/image4.jpg",
			url: "http://localhost:3001/image4.jpg",
			title: "Photo 4",
		},
	];
	it("displays thumbnails of photos", () => {
		render(<ImageGrid photos={photos} />);

		const element = screen.getByAltText("Photo 4");
		const photoThumbnail = screen.getByAltText("Photo 4");

		expect(element).toBeInTheDocument();
		expect(photoThumbnail).toHaveAttribute(
			"src",
			"http://localhost:3001/image4.jpg"
		);
	});

	it("opens single photo on click", async () => {
		render(<ImageGrid photos={photos} />);
		const photoThumbnail = await screen.getByAltText("Photo 4");

		userEvent.click(photoThumbnail);

		const singlePhoto = await screen.findByTestId("single-photo");
		const closeButton = await screen.findByRole("button", { name: "Close" });
		const singlePhotoImg = await screen.findByAltText(photos[0].title);

		expect(singlePhotoImg).toBeInTheDocument();
		expect(closeButton).toBeInTheDocument();
		expect(singlePhotoImg).toHaveAttribute(
			"src",
			"http://localhost:3001/image1.jpg"
		);

		userEvent.click(closeButton);
		await waitFor(() => {
			expect(singlePhoto).not.toBeInTheDocument();
		});
	});
});
