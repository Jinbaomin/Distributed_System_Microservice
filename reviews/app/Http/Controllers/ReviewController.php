<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ReviewController extends Controller
{
    public function index($id)
    {
        return Review::where('book_id', $id)->get();
    }
    
    public function store(Request $request)
    {
        $review = Review::create([
            'book_id' => $request->input('book_id'),
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating'),
        ]);

        // $req = Http::post("http://localhost:8000/api/books/{$review->book_id}/reviews", $review);

        // if($req->failed()) {
        //     echo "Failed to create review";
        // }

        return $review;
    }

    public function update(Request $request, $reviewId)
    {
        $review = Review::find($reviewId);
        $review->update($request->all());
        return $review;
    }

    public function deleteByBook($book)
    {
        $reviews = Review::where('book_id', $book)->get();

        foreach($reviews as $review) {
            $review->delete();
        }
    }

    public function deleteById($review)
    {
        $review = Review::find($review);
        $review->delete();
    }
}
