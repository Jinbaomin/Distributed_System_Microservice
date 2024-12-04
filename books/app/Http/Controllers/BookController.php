<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use Exception;
use GuzzleHttp\Exception\ConnectException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $books = null;

        if(!empty($request->get('filter')) || !empty($request->get('sortBy'))) {
            $orderByField = null;
            if(!empty($request->get('sortBy'))) $orderByField = $request->get('sortBy');
            else $orderByField = 'created_at,asc';

            $orderByFieldSplit = explode(',', $orderByField);

            $books = Book::where('title', 'like', '%' . $request->get('filter') . '%')
                ->orderBy($orderByFieldSplit[0], $orderByFieldSplit[1])
                ->get();
        } else {
            $books = Book::all();
        }
        
        foreach ($books as $book) {
            try {
                $response = Http::get("http://localhost:8001/api/books/{$book->id}/reviews");
                $book->reviews = $response->json();
            } catch(Exception $e) {
                $book->reviews = [];
            }
        }

        $data = [
            'status' => 200,
            'message' => 'Get all books successfully',
        ];

        return BookResource::collection($books)->additional($data);
    }

    public function show($id)
    {
        $book = Book::find($id);

        try {
            $book->reviews = Http::get("http://localhost:8001/api/books/{$book->id}/reviews")->json();
        } catch(Exception $e) {
            $book->reviews = [];
        }
        
        $data = [
            'status' => 200,
            'message' => 'Get book by ID successfully',
        ];

        return BookResource::make($book)->additional($data);
    }

    public function store(Request $request)
    {
        $book = Book::create([
            'title' => $request->input('title'),
            'author' => $request->input('author'),
            'published_year' => $request->input('published_year'),
            'description' => $request->input('description'),
            'rating' => $request->input('rating'),
            'company' => $request->input('company'),
            'imageUrl' => $request->input('imageUrl'),
            'manufacturer' => $request->input('manufacturer'),
            'pages' => $request->input('pages')
        ]);

        return response()->json([
            'status' => 201,
            'message' => 'Book created successfully',
            'data' => $book
        ], 201);
    }

    public function review(Request $request, $id) 
    {
        $book = Book::find($id);
        $reviews = $book->reviews;
        array_push($reviews, $request->all());
        $book->reviews = $reviews;
        $book->save();
    }

    public function update(Request $request, $id)
    {
        $book = Book::find($id);
        $book->update($request->all());
        return response()->json([
            'status' => 200,
            'message' => 'Book updated successfully',
            'data' => $book
        ], 200);
    }

    public function delete($id)
    {
        $book = Book::find($id);

        if($book == null) {
            return response()->json([
                'status' => 404,
                'message' => 'Book not found'
            ], 404);
        }

        Http::delete("http://localhost:8001/api/book/{$book->id}/reviews");
        $book->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Book deleted successfully'
        ], 200);
    }
}
