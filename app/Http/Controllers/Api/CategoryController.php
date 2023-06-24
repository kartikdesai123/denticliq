<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\AllCategoryCollection;
use App\Http\Resources\CategoryCollection;
use App\Models\Setting;
use App\Models\Category;
use App\Models\ProductCategory;

class CategoryController extends Controller
{

    public function index()
    {
        $allCategory = ProductCategory::pluck('category_id')->toArray();
        $final = array_values(array_unique($allCategory));
        return new AllCategoryCollection(Category::whereIn('id',$final)->where('level',0)->orderBy('order_level', 'desc')->get());
    }

    public function featured()
    {
        return new CategoryCollection(Category::where('featured', 1)->get());
    }

    public function first_level_categories()
    {
        return new CategoryCollection(Category::where('level', 0)->get());
    }
}
